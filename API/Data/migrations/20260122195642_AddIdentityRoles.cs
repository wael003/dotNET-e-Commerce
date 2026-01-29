using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.migrations
{
    /// <inheritdoc />
    public partial class AddIdentityRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1fb09d1f-2974-406e-bd2e-7779147059c3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38b91e5a-52aa-47e9-b00e-10fbc7c5e2fb");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "77b03d2d-0f93-4954-b8f5-13858de628ed", "Member", "Member", "MEMBER" },
                    { "8251a969-cf64-42ba-abb6-dc62131f6052", "Admin", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "77b03d2d-0f93-4954-b8f5-13858de628ed");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8251a969-cf64-42ba-abb6-dc62131f6052");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1fb09d1f-2974-406e-bd2e-7779147059c3", "a51ee145-8283-49fd-967a-0193f2acd068", "Member", "MEMBER" },
                    { "38b91e5a-52aa-47e9-b00e-10fbc7c5e2fb", "c1e25d9e-4003-44b5-b920-cc17368427c0", "Admin", "ADMIN" }
                });
        }
    }
}
