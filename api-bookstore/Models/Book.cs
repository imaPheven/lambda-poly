using Microsoft.AspNetCore.Mvc.ModelBinding;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStoreApi.Models;

public class Book : IMongoDoc
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    [BsonElement("Name")]
    [Display(Name = "Book Name")]
    [Required]
    public string BookName { get; set; } = null;
    [BsonRepresentation(BsonType.Double)]
    [Required()]
    public decimal Price { get; set; }
    [Required]
    public string Category{ get; set; } = null;
    [Required]
    public string Author { get; set; } = null;
}