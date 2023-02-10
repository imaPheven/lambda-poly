using BookStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BookStoreApi.Services;



public abstract class MongoService<ModelType>
  where ModelType : IMongoDoc, new() {
  protected IMongoCollection<ModelType> _collection;

  public virtual async Task<List<ModelType>> GetAsync() =>
    await _collection.Find(_ =>  true).ToListAsync();
  public virtual async Task<ModelType> GetAsync(string id) =>
    await _collection.Find(x =>  x.Id == id).FirstOrDefaultAsync();
  public virtual async Task CreateAsync(ModelType model) =>
    await _collection.InsertOneAsync(model);
  public virtual async Task UpdateAsync(string id, ModelType modelUpdate) =>
    await _collection.ReplaceOneAsync(x =>  x.Id == id, modelUpdate);
  public virtual async Task RemoveAsync(string id) =>
    await _collection.DeleteOneAsync(x => x.Id == id);

}