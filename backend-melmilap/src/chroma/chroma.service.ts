import { HttpException, Injectable } from '@nestjs/common';
import { ChromaClient, OpenAIEmbeddingFunction } from 'chromadb';

import 'dotenv/config';

@Injectable()
export class ChromaService {
  private client: ChromaClient;
  constructor() {
    this.client = new ChromaClient();
  }
  async getOrCreateCollection(collectionName: string) {
    try {
      const embedder = new OpenAIEmbeddingFunction({
        openai_api_key: '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',
      });

      const collection = await this.client.getOrCreateCollection({
        name: collectionName,
        embeddingFunction: embedder,
      });

      return collection;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
