import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, query, ref, onValue, orderByChild, remove } from "firebase/database";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    userEmail:'',
    pickedNumbers: [],
    drawPhase: false,
    betCount: 0,
    finalResults: [],
    betHistory: [],
    registerFail: ''
  },
  mutations: {
    set_isLoading(state){
      state.isLoading = !state.isLoading
    },
    set_User_Email(state, userEmail){
      state.userEmail = userEmail;
    },
    set_Picked_Number(state,pickedBallsArray){  
      state.pickedNumbers = [...state.pickedNumbers, pickedBallsArray];
    },
    delete_Picked_Number(state,ballToDeleteNumber){
      const newList = state.pickedNumbers.filter((pickedNumber) => pickedNumber.number !== ballToDeleteNumber)
      state.pickedNumbers = [...newList]
    },
    empty_Picked_Number_List(state){
      state.pickedNumbers=[];
    },
    set_Draw_Phase(state, isDrawing){
      state.drawPhase = isDrawing;
    },
    set_Bet_Count(state,betCount){
      state.betCount = betCount
    },
    set_Final_Results(state, results){
      state.finalResults = results;
    },
    set_Bet_History(state,history){
      state.betHistory = history
    },
    delete_Bet_From_History(state,key){
      const newHistory = state.betHistory.filter((pickedHistory) =>
       pickedHistory.key !== key)
      state.betHistory = [...newHistory]
    },
    set_Register_Fail(state,flag){
      state.registerFail = flag
    }
  },
  actions: {
    async registerUser({commit},{email,password}){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          commit('set_User_Email',user.email)

          //Chech if he's logged in (no error) and redirect to home page
          const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid);
              router.push({name:"Home"})
            }
         });
      })
      .catch((error) => {
          const errorCode = error.code;
          const registerErrorMessage = error.message;
          const flag = true
          commit('set_Register_Fail', flag)
          console.log(errorCode,registerErrorMessage)
      });
    },
    addPickedNumber({commit},{pickedNumbers}){
      const pickedBallsArray = {
        number:pickedNumbers[0].number,
        deletable: pickedNumbers[0].deletable,
        ballColorChange: pickedNumbers[0].ballColorChange
      };
      commit('set_Picked_Number', pickedBallsArray)
    },
    deletePickedNumber({commit},{ballToDeleteNumber}){
      commit('delete_Picked_Number',ballToDeleteNumber)
    },
    emptyPickedNumber({commit}){
      commit('empty_Picked_Number_List')
    },
    setDrawPhase({commit},{isDrawing}){
      commit('set_Draw_Phase', isDrawing)
    },
    setBetCount({commit},{betCount}){
      commit('set_Bet_Count', betCount)
    },
    setFinalResults({commit},{results}){
      commit('set_Final_Results', results)
    },
    setBetHistory({commit}){
      const db = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const dbRef = query(ref(db, 'history/' + userId + '/'), orderByChild("timestamp"));
        
        const history = [];
  
        onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            history.push({key: childKey, data: childData})
            
        });
        }, {
        onlyOnce: true
        });
        history.slice().reverse()
      commit('set_Bet_History', history)
    },
    deleteBetFromHistory({commit},{key}){

        const db = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser.uid;

        let confText = "Are you sure you want to delete this item?"
        if (confirm(confText) == true){
         remove(ref(db, 'history/' + userId + '/' + key))
        commit('delete_Bet_From_History', key)

        }
    }
  },
  modules: {
  },
  getters:{
    getIsLoading:(state)=> state.isLoading,
    getPickedNumbers: (state)=> state.pickedNumbers,
    getDrawPhase: (state)=>state.drawPhase,
    getBetCount:(state)=>state.betCount,
    getFinalResults:(state)=>state.finalResults,
    getBetHistory:(state) => state.betHistory,
    getRegisterFail:(state) => state.registerFail
  }
})
