import { createAction } from 'redux-actions';

export const FETCHING_PROJECTS = 'FETCHING_PROJECTS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const SELECT_PROJECT_MENU = 'SELECT_PROJECT_MENU';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const WILL_UPDATE_PROJECT_LIST = 'WILL_UPDATE_PROJECT_LIST';
export const CHANGE_PROJECT_LIST_PAGE = 'CHANGE_PROJECT_LIST_PAGE';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const REQUEST_SEARCH_PROJECTS = 'REQUEST_SEARCH_PROJECTS';
export const RECEIVE_SEARCHING_PROJECTS_RESULT = 'RECEIVE_SEARCHING_PROJECTS_RESULT';
export const RELOAD_PROJECTS = 'RELOAD_PROJECTS';
export const RECEIVE_RELOADED_PROJECTS_RESULT = 'RECEIVE_RELOADED_PROJECTS_RESULT';
export const CONFIRM_DELETE_PROJECT = 'CONFIRM_DELETE_PROJECT';
export const OPEN_DELETE_CONFIRMATION = 'OPEN_DELETE_CONFIRMATION';
export const CLOSE_DELETE_CONFIRMATION = 'CLOSE_DELETE_CONFIRMATION';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const SEARCH_RELATED_PROJECTS = 'SEARCH_RELATED_PROJECTS';
export const RECEIVE_RELATED_PROJECTS = 'RECEIVE_RELATED_PROJECTS';

export const fetchingProjects = createAction(FETCHING_PROJECTS);
export const selectProjectMenu = createAction(SELECT_PROJECT_MENU);
export const receiveProject = createAction(RECEIVE_PROJECT);
export const receiveProjects = createAction(RECEIVE_PROJECTS);
export const willUpdateProjectList = createAction(WILL_UPDATE_PROJECT_LIST);
export const changeProjectListPage = createAction(CHANGE_PROJECT_LIST_PAGE, page => {
  return page;
});
export const fetchProjects = createAction(FETCH_PROJECTS, (page, mode) => {
  return {
    page,
    mode
  };
});
export const updateProject = createAction(UPDATE_PROJECT);
export const updateProjects = createAction(UPDATE_PROJECTS);
export const requestSearchProjects = createAction(REQUEST_SEARCH_PROJECTS, keyword => {
  return {
    keyword
  };
});
export const receiveSearchProjectsResult = createAction(RECEIVE_SEARCHING_PROJECTS_RESULT, data => {
  return {
    data
  };
});
export const reloadProjects = createAction(RELOAD_PROJECTS);
export const receiveReloadedProjectsResult = createAction(RECEIVE_RELOADED_PROJECTS_RESULT, data => {
  return {
    data
  };
});
export const confirmDeleteProject = createAction(CONFIRM_DELETE_PROJECT, projectId => {
  return {
    projectId
  };
});
export const openDeleteConfirmation = createAction(OPEN_DELETE_CONFIRMATION, project => {
  return {
    project
  };
});
export const closeDeleteConfirmation = createAction(CLOSE_DELETE_CONFIRMATION);
export const deleteProject = createAction(DELETE_PROJECT, projectId => {
  return {
    projectId
  };
});
export const searchRelatedProjects = createAction(SEARCH_RELATED_PROJECTS, query => {
  return {
    query
  };
});
export const receiveRelatedProjects = createAction(RECEIVE_RELATED_PROJECTS, data => {
  return {
    data
  };
});
