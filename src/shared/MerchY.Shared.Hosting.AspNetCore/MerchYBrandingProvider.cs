using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace MerchY.Shared.Hosting.AspNetCore
{
    [Dependency(ReplaceServices = true)]
    public class MerchYBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "EShopOnAbp";
    }
}
