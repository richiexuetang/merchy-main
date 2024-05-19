using MerchY.Shared.Hosting.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace MerchY.Shared.Hosting.Gateways
{
    [DependsOn(
        typeof(MerchYSharedHostingAspNetCoreModule)
    )]
    public class MerchYSharedHostingGatewaysModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            
            context.Services.AddReverseProxy()
                .LoadFromConfig(configuration.GetSection("ReverseProxy"));
        }
    }
}
