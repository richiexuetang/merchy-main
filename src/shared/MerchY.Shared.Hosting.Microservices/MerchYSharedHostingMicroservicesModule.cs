using Medallion.Threading;
using Medallion.Threading.Redis;
using MerchY.Shared.Hosting.AspNetCore;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;
using Volo.Abp.AspNetCore.Authentication.JwtBearer;
using Volo.Abp.BackgroundJobs.RabbitMQ;
using Volo.Abp.Caching;
using Volo.Abp.Caching.StackExchangeRedis;
using Volo.Abp.DistributedLocking;
using Volo.Abp.EventBus.RabbitMq;
using Volo.Abp.Modularity;

namespace MerchY.Shared.Hosting.Microservices;

[DependsOn(
    typeof(MerchYSharedHostingAspNetCoreModule),
    typeof(AbpBackgroundJobsRabbitMqModule),
    typeof(AbpAspNetCoreAuthenticationJwtBearerModule),
    typeof(AbpEventBusRabbitMqModule),
    typeof(AbpCachingStackExchangeRedisModule),
    //typeof(AdministrationServiceEntityFrameworkCoreModule),
    typeof(AbpDistributedLockingModule)
)]
public class MerchYSharedHostingMicroservicesModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Microsoft.IdentityModel.Logging.IdentityModelEventSource.ShowPII = true;
        var configuration = context.Services.GetConfiguration();

        Configure<AbpDistributedCacheOptions>(options =>
        {
            options.KeyPrefix = "EShopOnAbp:";
        });

        var redis = ConnectionMultiplexer.Connect(configuration["Redis:Configuration"]!);
        context.Services
            .AddDataProtection()
            .PersistKeysToStackExchangeRedis(redis, "EShopOnAbp-Protection-Keys");
            
        context.Services.AddSingleton<IDistributedLockProvider>(sp =>
        {
            var connection = ConnectionMultiplexer.Connect(configuration["Redis:Configuration"]!);
            return new RedisDistributedSynchronizationProvider(connection.GetDatabase());
        });
    }
}
