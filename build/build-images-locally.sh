#!/bin/bash

export IMAGE_TAG="latest"
export total=11
cd ../
export currentFolder=`pwd`
cd build/


echo "*** BUILDING WEB (WWW) 1/${total} ****************"
cd ${currentFolder}/apps/angular
yarn
# ng build --prod
npm run build:prod
docker build -f Dockerfile.local --force-rm -t "eshoponabp/app-web:${IMAGE_TAG}" .


echo "*** BUILDING WEB-PUBLIC 2/$total ****************"
cd ${currentFolder}/apps/public-web/src/EShopOnAbp.PublicWeb
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/app-publicweb:${IMAGE_TAG}" .


echo "*** BUILDING WEB-GATEWAY 3/$total ****************"
cd ${currentFolder}/gateways/web/src/EShopOnAbp.WebGateway
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/gateway-web:${IMAGE_TAG}" .


echo "*** BUILDING WEB-PUBLIC-GATEWAY 4/$total ****************"
cd ${currentFolder}/gateways/web-public/src/EShopOnAbp.WebPublicGateway
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/gateway-web-public:${IMAGE_TAG}" .


echo "*** BUILDING IDENTITY-SERVICE 5/$total ****************"
cd ${currentFolder}/services/identity/src/EShopOnAbp.IdentityService.HttpApi.Host
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-identity:${IMAGE_TAG}" .


echo "*** BUILDING ADMINISTRATION-SERVICE 6/$total ****************"
cd ${currentFolder}/services/administration/src/EShopOnAbp.AdministrationService.HttpApi.Host
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-administration:${IMAGE_TAG}" .


echo "**************** BUILDING BASKET-SERVICE 7/$total ****************"
cd ${currentFolder}/services/basket/src/EShopOnAbp.BasketService
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-basket:${IMAGE_TAG}" .


echo "**************** BUILDING CATALOG-SERVICE 8/$total ****************"
cd ${currentFolder}/services/catalog/src/EShopOnAbp.CatalogService.HttpApi.Host
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-catalog:${IMAGE_TAG}" .


echo "**************** BUILDING PAYMENT-SERVICE 9/$total ****************"
cd ${currentFolder}/services/payment/src/EShopOnAbp.PaymentService.HttpApi.Host
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-payment:${IMAGE_TAG}" .


echo "**************** BUILDING ORDERING-SERVICE 10/$total ****************"
cd ${currentFolder}/services/ordering/src/EShopOnAbp.OrderingService.HttpApi.Host
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-ordering:${IMAGE_TAG}" .

echo "**************** BUILDING CMSKIT-SERVICE 11/$total ****************"
cd ${currentFolder}/services/cmskit/src/EShopOnAbp.CmskitService.HttpApi.Host
dotnet publish -c Release
docker build -f Dockerfile.local --force-rm -t "eshoponabp/service-cmskit:${IMAGE_TAG}" .

echo "ALL COMPLETED"