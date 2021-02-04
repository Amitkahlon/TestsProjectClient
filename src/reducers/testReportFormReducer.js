const testReportFormReducer = (state, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "Set_From_Date": {
            const { payload } = action;
            newState.fromDate = payload.fromDate
            break;
        }
        case "Set_To_Date": {
            const { payload } = action;
            newState.toDate = payload.toDate;
            break;
        }
        case "Set_Any_Date":{
            const { payload } = action;
            newState.anyDate = payload.checked;
            break;
        }
        case "SET_TESTS":{
            const { payload } = action;
            newState.tests = payload.tests;
            break;
        }
        case "SET_TESTID": {
            const { payload }  = action;
            newState.testId = payload.testId;
            break;
        }
        default: break;
    }

    console.log(newState);
    return newState;
}

export default testReportFormReducer