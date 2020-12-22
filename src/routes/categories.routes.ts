import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';

import Category from '../models/Category';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request: Request, response: Response) => {
  const categoriesRepository = getRepository(Category);
  const categories = await categoriesRepository.find();
  return response.json(categories);
});

categoriesRouter.post('/', async (request: Request, response: Response) => {
  const { title } = request.body;

  const CreateCategory = new CreateCategoryService();
  const category = await CreateCategory.execute({
    title,
  });

  return response.json(category);
});

export default categoriesRouter;
