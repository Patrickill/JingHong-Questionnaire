import loginAPI from "@/apis/service/Login/loginAPI.ts";
import getQuestionnaireListAPI from "./service/Home/getQuestionnaireListAPI";
import getQuestionnaireDetailAPI from "@/apis/service/DetailInfo/getQuestionnaireDetailAPI.ts";
import updateQuestionnaireStatusAPI from "./service/Home/updateQuestionnaireStatusAPI";
import delQuestionnaireAPI from "./service/Home/delQuestionnaireAPI";
import setQuestionnaireDetailAPI from "@/apis/service/DetailInfo/setQuestionnaireDetailAPI.ts";
import getAnswersAPI from "./service/DataDisplay/getAnswersAPI";
import saveImgAPI from "@/apis/service/saveImg.ts";
import setNewQuestionnaireDetailAPI from '@/apis/service/DetailInfo/setNewQuestionnaireDetailAPI.ts';
import getDatatableAPI from "./service/DataDisplay/getDatatableAPI";

export {
    loginAPI,
    getQuestionnaireListAPI,
    getQuestionnaireDetailAPI,
    updateQuestionnaireStatusAPI,
    delQuestionnaireAPI,
    setQuestionnaireDetailAPI,
    getAnswersAPI,
    saveImgAPI,
    setNewQuestionnaireDetailAPI,
    getDatatableAPI,
}