using System;
using Microsoft.EntityFrameworkCore;
using API.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace API.Data;

public class StoreContext(DbContextOptions<StoreContext> options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole
            {
                Id = "77b03d2d-0f93-4954-b8f5-13858de628ed",
                ConcurrencyStamp = "Member",
                Name = "Member",
                NormalizedName = "MEMBER"
            },
            new IdentityRole
            {
                Id = "8251a969-cf64-42ba-abb6-dc62131f6052",
                ConcurrencyStamp = "Admin",
                Name = "Admin",
                NormalizedName = "ADMIN"
            }
        );
        
    }
}


