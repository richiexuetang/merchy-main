import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const BUCKET_URL = 'https://merchy-images.s3.us-west-1.amazonaws.com/';

type FormValues = {
  name: string;
  title: string;
  brand: string;
  price: string;
  description: string;
  urlKey: string;
  primaryTitle: string;
  secondaryTitle: string;
  model: string;
  primaryCategory: string;
  productCategory: string;
  categoryId: String;
  image: any;
};

const AddProductMutation = gql`
  mutation (
    $name: String!
    $title: String!
    $imageUrl: String!
    $brand: String!
    $price: String!
    $urlKey: String!
    $primaryTitle: String!
    $secondaryTitle: String
    $model: String
    $primaryCategory: String
    $productCategory: String
    $categoryId: String!
  ) {
    addProduct(
      name: $name
      title: $title
      imageUrl: $imageUrl
      brand: $brand
      price: $price
      urlKey: $urlKey
      primaryTitle: $primaryTitle
      secondaryTitle: $secondaryTitle
      model: $model
      primaryCategory: $primaryCategory
      productCategory: $productCategory
      categoryId: $categoryId
    ) {
      id
    }
  }
`;

const Admin = () => {
  const [addProduct, { data, loading, error }] = useMutation(
    AddProductMutation,
    {
      onCompleted: () => reset(),
    }
  );

  const [file, setFile] = useState<any>();

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  // Upload photo function
  const uploadPhoto = async () => {
    const { data } = await axios.post('api/upload-image', {
      name: file.name,
      type: file.type,
    });

    const url = data.url;

    toast.promise(
      axios.put(url, file, {
        headers: {
          'Content-type': file.type,
        },
      }),
      {
        loading: 'Uploading...',
        success: 'Image successfully uploaded!🎉',
        error: `Upload failed 😥 Please try again ${error}`,
      }
    );
  };

  const onSubmit = async (data: any) => {
    await uploadPhoto();
    const imageUrl: string = BUCKET_URL + file.name;
    setFile(null);

    const {
      name,
      title,
      category,
      brand,
      price,
      description,
      urlKey,
      primaryTitle,
      secondaryTitle,
      model,
      primaryCategory,
      productCategory,
      categoryId,
    } = data;

    const variables = {
      name,
      title,
      category,
      imageUrl,
      brand,
      price,
      description,
      urlKey,
      primaryTitle,
      secondaryTitle,
      model,
      primaryCategory,
      productCategory,
      categoryId,
    };

    try {
      toast.promise(addProduct({ variables }), {
        loading: 'Creating new product..',
        success: 'Product successfully created!🎉',
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <h1 className="text-3xl font-medium my-5">Create a new product</h1>
      <form
        className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            placeholder="Name"
            type="text"
            {...register('name', { required: true })}
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            placeholder="Title"
            type="text"
            {...register('title', { required: true })}
            name="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Brand</span>
          <input
            placeholder="Brand"
            {...register('brand', { required: true })}
            name="brand"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Price</span>
          <input
            placeholder="Price"
            {...register('price', { required: true })}
            name="price"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description</span>
          <input
            placeholder="Description"
            {...register('description', { required: false })}
            name="description"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">UrlKey</span>
          <input
            placeholder="UrlKey"
            {...register('urlKey', { required: true })}
            name="urlKey"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">PrimaryTitle</span>
          <input
            placeholder="PrimaryTitle"
            {...register('primaryTitle', { required: true })}
            name="primaryTitle"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">SecondaryTitle</span>
          <input
            placeholder="SecondaryTitle"
            {...register('secondaryTitle', { required: false })}
            name="secondaryTitle"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Model</span>
          <input
            placeholder="Model"
            {...register('model', { required: true })}
            name="model"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Primary Category</span>
          <input
            placeholder="PrimaryCategory"
            {...register('primaryCategory', { required: true })}
            name="primaryCategory"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Product Category</span>
          <input
            placeholder="ProductCategory"
            {...register('productCategory', { required: true })}
            name="productCategory"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Parent CategoryID</span>
          <input
            placeholder="CategoryId"
            {...register('categoryId', { required: true })}
            name="categoryId"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">
            Upload a .png or .jpg image (max 1MB).
          </span>
          <input
            {...register('image', { required: true })}
            onChange={(e) => selectFile(e)}
            type="file"
            accept="image/png, image/jpeg"
            name="image"
          />
        </label>

        <button
          disabled={loading}
          type="submit"
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-6 h-6 animate-spin mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Creating...
            </span>
          ) : (
            <span>Create Product</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Admin;
