﻿using EShopOnAbp.OrderingService.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Specifications;

namespace EShopOnAbp.OrderingService.Orders;

public class EfCoreOrderRepository : EfCoreRepository<OrderingServiceDbContext, Order, Guid>, IOrderRepository
{
    public EfCoreOrderRepository(IDbContextProvider<OrderingServiceDbContext> dbContextProvider) : base(
        dbContextProvider)
    {
    }

    public async Task<List<Order>> GetOrdersByUserId(
        Guid userId,
        ISpecification<Order> spec,
        bool includeDetails = false,
        CancellationToken cancellationToken = default)
    {
        return await (await GetDbSetAsync())
            .IncludeDetails(includeDetails)
            .Where(q => q.Buyer.Id == userId)
            .Where(spec.ToExpression())
            .OrderByDescending(o => o.OrderDate)
            .ToListAsync(GetCancellationToken(cancellationToken));
    }

    public async Task<List<Order>> GetOrdersAsync(
        ISpecification<Order> spec,
        bool includeDetails = false,
        CancellationToken cancellationToken = default)
    {
        return await (await GetDbSetAsync())
            .IncludeDetails(includeDetails)
            .Where(spec.ToExpression())
            .OrderByDescending(o => o.OrderDate)
            .ToListAsync(GetCancellationToken(cancellationToken));
    }
    
    public async Task<List<Order>> GetDashboardAsync(
        ISpecification<Order> spec,
        bool includeDetails = true,
        CancellationToken cancellationToken = default)
    {
        return await (await GetDbSetAsync())
        .IncludeDetails(includeDetails)
        .Where(spec.ToExpression())
        .ToListAsync(GetCancellationToken(cancellationToken));
    }

    public async Task<Order> GetByOrderNoAsync(
        int orderNo,
        bool includeDetails = true,
        CancellationToken cancellationToken = default)
    {
        return await (await GetQueryableAsync())
                   .IncludeDetails(includeDetails)
                   .FirstOrDefaultAsync(q => q.OrderNo == orderNo,
                       cancellationToken: GetCancellationToken(cancellationToken))
               ?? throw new EntityNotFoundException(typeof(Order)); //TODO: Maybe create new exception with property extending this
    }

    public override async Task<IQueryable<Order>> WithDetailsAsync()
    {
        return (await GetQueryableAsync())
            .IncludeDetails();
    }
}