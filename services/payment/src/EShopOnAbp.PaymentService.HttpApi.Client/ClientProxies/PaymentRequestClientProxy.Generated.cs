// This file is automatically generated by ABP framework to use MVC Controllers from CSharp
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Http.Client;
using Volo.Abp.Http.Modeling;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Client.ClientProxying;
using EShopOnAbp.PaymentService.PaymentRequests;

// ReSharper disable once CheckNamespace
namespace EShopOnAbp.PaymentService.Controllers.ClientProxies;

[Dependency(ReplaceServices = true)]
[ExposeServices(typeof(IPaymentRequestAppService), typeof(PaymentRequestClientProxy))]
public partial class PaymentRequestClientProxy : ClientProxyBase<IPaymentRequestAppService>, IPaymentRequestAppService
{
    public virtual async Task<PaymentRequestDto> CompleteAsync(string paymentMethod, PaymentRequestCompleteInputDto input)
        {
            return await RequestAsync<PaymentRequestDto>(nameof(CompleteAsync), new ClientProxyRequestTypeValue
            {
                { typeof(string), paymentMethod },
                { typeof(PaymentRequestCompleteInputDto), input }
            });
        }

        public virtual async Task<PaymentRequestDto> CreateAsync(PaymentRequestCreationDto input)
        {
            return await RequestAsync<PaymentRequestDto>(nameof(CreateAsync), new ClientProxyRequestTypeValue
            {
                { typeof(PaymentRequestCreationDto), input }
            });
        }

        public virtual async Task<bool> HandleWebhookAsync(string paymentMethod, string payload)
        {
            return await RequestAsync<bool>(nameof(HandleWebhookAsync), new ClientProxyRequestTypeValue
            {
                { typeof(string), paymentMethod },
                { typeof(string), payload }
            });
        }

        public virtual async Task<PaymentRequestStartResultDto> StartAsync(string paymentMethod, PaymentRequestStartDto input)
        {
            return await RequestAsync<PaymentRequestStartResultDto>(nameof(StartAsync), new ClientProxyRequestTypeValue
            {
                { typeof(string), paymentMethod },
                { typeof(PaymentRequestStartDto), input }
            });
        }
}
