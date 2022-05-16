import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducer";

import {
  addUserTypeReducer,
  getUserTypeReducer,
  deleteUserTypeReducer,
  addUserReducer,
  listUserReducer,
  deleteUserReducer,
  editUserReducer,
} from "./hrAdminReducer";

import {
  listStoreReducer,
  addStoreReducer,
  editStoreReducer,
  deleteStoreReducer,
  listActiveStoreReducer,
} from "./storeManagementReducer";

import {
  addContactReducer,
  listContactReducer,
  editContactReducer,
  deleteContactReducer,
} from "./contactReducer";

import {
  addGenericReducer,
  listGenericReducer,
  listActiveGenericReducer,
  editGenericReducer,
  deleteGenericReducer,
} from "./genericReducer";

import {
  addCompanyReducer,
  listCompanyReducer,
  editCompanyReducer,
  deleteCompanyReducer,
  listActiveCompanyReducer,
} from "./companyReducer";

import {
  addRackReducer,
  listRackReducer,
  editRackReducer,
  deleteRackReducer,
  listActiveRackReducer,
} from "./rackReducer";

import {
  addMedicineFormReducer,
  listMedicineFormReducer,
  editMedicineFormReducer,
  deleteMedicineFormReducer,
  listActiveMedicineFormReducer,
} from "./medicineFormReducer";

import {
  addMedicineReducer,
  listMedicineReducer,
  editMedicineReducer,
  deleteMedicineReducer,
  listActiveMedicineReducer,
} from "./medicineReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  //hrAdmin>userType
  addUserType: addUserTypeReducer,
  getUserType: getUserTypeReducer,
  deleteUserType: deleteUserTypeReducer,
  //hrAdmin>user
  addUser: addUserReducer,
  listUser: listUserReducer,
  deleteUser: deleteUserReducer,
  editUser: editUserReducer,
  // storeManagement
  listStore: listStoreReducer,
  listActiveStore: listActiveStoreReducer,
  addStore: addStoreReducer,
  editStore: editStoreReducer,
  deleteStore: deleteStoreReducer,
  // contact
  addContact: addContactReducer,
  listContact: listContactReducer,
  editContact: editContactReducer,
  deleteContact: deleteContactReducer,
  // generic
  addGeneric: addGenericReducer,
  listGeneric: listGenericReducer,
  listActiveGeneric: listActiveGenericReducer,
  editGeneric: editGenericReducer,
  deleteGeneric: deleteGenericReducer,
  // company
  addCompany: addCompanyReducer,
  listCompany: listCompanyReducer,
  editCompany: editCompanyReducer,
  deleteCompany: deleteCompanyReducer,
  listActiveCompany: listActiveCompanyReducer,
  // rack
  addRack: addRackReducer,
  listRack: listRackReducer,
  editRack: editRackReducer,
  deleteRack: deleteRackReducer,
  listActiveRack: listActiveRackReducer,
  // medicineForm
  addMedicineForm: addMedicineFormReducer,
  listMedicineForm: listMedicineFormReducer,
  editMedicineForm: editMedicineFormReducer,
  deleteMedicineForm: deleteMedicineFormReducer,
  listActiveMedicineForm: listActiveMedicineFormReducer,
  // medicine
  addMedicine: addMedicineReducer,
  listMedicine: listMedicineReducer,
  editMedicine: editMedicineReducer,
  deleteMedicine: deleteMedicineReducer,
  listActiveMedicine: listActiveMedicineReducer,
});

export default rootReducer;
