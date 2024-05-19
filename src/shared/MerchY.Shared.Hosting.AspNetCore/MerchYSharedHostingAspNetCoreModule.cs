using MerchY.Shared.Localization;
using Volo.Abp.AspNetCore.Serilog;
using Volo.Abp.Modularity;
using Volo.Abp.Swashbuckle;
using Volo.Abp.VirtualFileSystem;

namespace MerchY.Shared.Hosting.AspNetCore;

[DependsOn(
    typeof(MerchYSharedHostingModule),
    typeof(MerchYSharedLocalizationModule),
    typeof(AbpAspNetCoreSerilogModule),
    typeof(AbpSwashbuckleModule)
)]
public class MerchYSharedHostingAspNetCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<MerchYSharedHostingAspNetCoreModule>("EShopOnAbp.Shared.Hosting.AspNetCore");
        });
    }
}
