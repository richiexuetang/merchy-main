import { Account } from '../../components';
import { getAllBrowseCategories } from '../../api';

export async function getStaticProps(context) {
  const allCategories = await getAllBrowseCategories();

  const browseCategories = allCategories.data.categories.edges;

  return {
    props: {
      browseCategories,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'security' } },
      { params: { slug: 'buying' } },
      { params: { slug: 'selling' } },
      { params: { slug: 'settings' } },
      { params: { slug: 'following' } },
      { params: { slug: 'profile' } },
      { params: { slug: 'portfolio' } },
    ],
    fallback: false,
  };
}

export default Account;
