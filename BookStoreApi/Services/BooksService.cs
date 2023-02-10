using BookStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BookStoreApi.Services;

public class BooksService : MongoService<Book> {
  

  public BooksService(IOptions<BookStoreDatabaseSetings> bookStoreDBSettings) {
    var mongoClient = new MongoClient(bookStoreDBSettings.Value.ConnectionString);
    var mongoDatabase = mongoClient.GetDatabase(bookStoreDBSettings.Value.DatabaseName);
    this._collection = mongoDatabase.GetCollection<Book>(bookStoreDBSettings.Value.BooksCollectionName);
    
  }

  public override async Task<List<Book>> GetAsync() =>
    await _collection.Find(_ =>  true).ToListAsync();
  public override async Task<Book> GetAsync(string id) =>
    await _collection.Find(x =>  x.Id == id).FirstOrDefaultAsync();
  public override async Task CreateAsync(Book newBook) =>
    await _collection.InsertOneAsync(newBook);
  public override async Task UpdateAsync(string id, Book bookUpdate) =>
    await _collection.ReplaceOneAsync(x =>  x.Id == id, bookUpdate);
  public override async Task RemoveAsync(string id) =>
    await _collection.DeleteOneAsync(x => x.Id == id);

}