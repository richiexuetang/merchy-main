using Microsoft.Extensions.Logging;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace MerchY.DbMigrator;

public class MigrationService: ITransientDependency
{
    private readonly ILogger<MigrationService> _logger;
    private readonly IDataSeeder _dataSeeder;

    public MigrationService(ILogger<MigrationService> logger, IDataSeeder dataSeeder)
    {
        _logger = logger;
        _dataSeeder = dataSeeder;
    }

    public async Task MigrateAsync(CancellationToken cancellationToken)
    {
        // Check if keycloak api is available
        
        //Seed data
        await _dataSeeder.SeedAsync();
        
        _logger.LogInformation("Migration completed!");
    }
    
}