import { LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE, REQUEST_LOGIN_MODAL_OPEN, REQUEST_LOGIN_MODAL_CLOSE, ASK_NONE_SAVE_MODAL_OPEN, ASK_NONE_SAVE_MODAL_CLOSE, CREATE_ERROR_MODAL_OPEN, CREATE_ERROR_MODAL_CLOSE, CREATE_SUCCESS_MODAL_OPEN, CREATE_SUCCESS_MODAL_CLOSE, CREATE_NEW_ACCOUNT_MODAL_OPEN, CREATE_NEW_ACCOUNT_MODAL_CLOSE, NOW_LOADING_ON, NOW_LOADING_OFF, ADD_MEMBER_MODAL_OPEN, ADD_MEMBER_MODAL_CLOSE, ADD_MEMBER_ERR, UPDATE_GROUP_MODAL_OPEN, UPDATE_GROUP_MODAL_CLOSE, CREATE_NEW_ACCOUNT_ERR, UPDATE_CONTENT_MODAL_OPEN, UPDATE_CONTENT_MODAL_CLOSE, SEND_EMAIL_MODAL_OPEN, SEND_EMAIL_MODAL_CLOSE, OUT_OF_ACCOUNT_MODAL_OPEN, OUT_OF_ACCOUNT_MODAL_CLOSE, SEE_DETAIL_MODAL_OPEN, SEE_DETAIL_MODAL_CLOSE, OUT_OF_USER_MODAL_OPEN, OUT_OF_USER_MODAL_CLOSE } from '../actions/constants'
import { ModalAction } from '../actions/modalActions'


const initialState = {
  isLoginModalOpen : false,
  requestLoginModal : false,
  askNoneSaveModal : false,
  createErrorModal : false,
  createSuccessModal: false,
  errorMessage: null,
  createNewAccountModal : false,
  createNewAccountErr : null,
  nowLoading : false,
  addMemberModal : false,
  addMemberErr : null,
  updateGroupModal : false,
  updateContentModal : false,
  updateContentId : null,
  sendEmailModal : false,
  outOfAccountModal : false,
  seeDetailModal : false,
  outOfUserModal : false
}

const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_MODAL_OPEN : 
      return {
        ...state,
        isLoginModalOpen : true
      }
    case LOGIN_MODAL_CLOSE : 
      return {
        ...state,
        isLoginModalOpen : false
      }
    case REQUEST_LOGIN_MODAL_OPEN :
      return {
        ...state,
        requestLoginModal : true
      }
    case REQUEST_LOGIN_MODAL_CLOSE :
      return {
        ...state,
        requestLoginModal : false
      }
    case ASK_NONE_SAVE_MODAL_OPEN : 
      return {
        ...state,
        askNoneSaveModal : true
      }
    case ASK_NONE_SAVE_MODAL_CLOSE : 
      return {
        ...state,
        askNoneSaveModal : false
      }
    case CREATE_ERROR_MODAL_OPEN :
      return {
        ...state,
        createErrorModal : true,
        errorMessage: action.message
      }
    case CREATE_ERROR_MODAL_CLOSE : 
      return {
        ...state,
        createErrorModal : false
      }
    case CREATE_SUCCESS_MODAL_OPEN : 
      return {
        ...state,
        createSuccessModal : true
      }
    case CREATE_SUCCESS_MODAL_CLOSE :
      return {
        ...state,
        createSuccessModal : false
      }
    case CREATE_NEW_ACCOUNT_MODAL_OPEN : 
      return {
        ...state,
        createNewAccountModal : true
      }
    case CREATE_NEW_ACCOUNT_MODAL_CLOSE :
      return {
        ...state,
        createNewAccountModal : false
      }
    case CREATE_NEW_ACCOUNT_ERR : 
      return {
        ...state,
        createNewAccountErr : action.message
      }
    case NOW_LOADING_ON :
      return {
        ...state,
        nowLoading : true
      } 
    case NOW_LOADING_OFF : 
      return {
        ...state,
        nowLoading : false
      }
    case ADD_MEMBER_MODAL_OPEN :
      return {
        ...state,
        addMemberModal : true
      }
    case ADD_MEMBER_MODAL_CLOSE : 
      return {
        ...state,
        addMemberModal : false
      }
    case ADD_MEMBER_ERR :
      return {
        ...state,
        addMemberErr : action.message
      }
    case UPDATE_GROUP_MODAL_OPEN : 
      return {
        ...state,
        updateGroupModal : true
      }
    case UPDATE_GROUP_MODAL_CLOSE :
      return {
        ...state,
        updateGroupModal : false
      }
    case UPDATE_CONTENT_MODAL_OPEN : 
      return {
        ...state,
        updateContentModal : true,
        updateContentId : action.id
      }
    case UPDATE_CONTENT_MODAL_CLOSE :
      return {
        ...state,
        updateContentModal : false,
        updateContentId : null
      }
    case SEND_EMAIL_MODAL_OPEN : 
      return {
        ...state,
        sendEmailModal : true
      }
    case SEND_EMAIL_MODAL_CLOSE : 
      return {
        ...state,
        sendEmailModal : false
      }
    case OUT_OF_ACCOUNT_MODAL_OPEN :
      return {
        ...state,
        outOfAccountModal : true
      }
    case OUT_OF_ACCOUNT_MODAL_CLOSE :
      return {
        ...state,
        outOfAccountModal : false
      }
    case SEE_DETAIL_MODAL_OPEN :
      return {
        ...state,
        seeDetailModal : true
      }
    case SEE_DETAIL_MODAL_CLOSE : 
      return {
        ...state,
        seeDetailModal : false
      }
    case OUT_OF_USER_MODAL_OPEN :
      return {
        ...state,
        outOfUserModal : true
      }
    case OUT_OF_USER_MODAL_CLOSE : 
      return {
        ...state,
        outOfUserModal : false 
      }
  
      default:
        return state
  }
}

export default modalReducer