import ClientModel from '../../models/ClientModel';

/** Action types for usage with redux. */
export const FETCH_RECIPE: 'FETCH_RECIPE' = 'FETCH_RECIPE';
export const FETCH_RECIPE_SUCCESS: 'FETCH_RECIPE_SUCCESS' = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_ERROR: 'FETCH_RECIPE_ERROR' = 'FETCH_RECIPE_ERROR';
export const DELETE_RECIPE: 'DELETE_RECIPE' = 'DELETE_RECIPE';
export const LOAD_RECIPES_SUCCESS: 'FETCH_RECIPE_SUCCESS' = 'FETCH_RECIPE_SUCCESS';

export interface SaveRecipe {
  type: typeof FETCH_RECIPE
}

export interface DeleteRecipe {
  type: typeof DELETE_RECIPE
  id: number;
}

export interface SaveRecipeSuccess {
  type: typeof FETCH_RECIPE_SUCCESS
  clients: ClientModel[]
}

export interface SaveRecipeError {
  type: typeof FETCH_RECIPE_ERROR,
}

export interface fetchClientsSuccess {
  type: typeof LOAD_RECIPES_SUCCESS
  clients: ClientModel[]
}

export type RecipeActions = SaveRecipe | SaveRecipeSuccess | DeleteRecipe | fetchClientsSuccess;