export const insertIntoState = (data, state) => {
  let tempData1 = state.allData;
  tempData1.push(data);
  return { allData: tempData1, searchData: state.searchData };
};

export const updateContentOfTheState = (data, state) => {
  let tempData1 = state.allData;
  tempData1.push(data);
  return { allData: tempData1, searchData: state.searchData };
};

export const deletefromState = (data, state) => {
  let tempData1 = state.allData;
  tempData1.push(data);
  return { allData: tempData1, searchData: state.searchData };
};

// export const changeStateIndex = (id, state) => {
//   return {
//     index: id,
//     showFormDialog: state.showFormDialog,
//     deletefromState: state.showDeleteDialog,
//     allData: state.allData,
//     searchData: state.searchData,
//   };
// };

// export const setShowDataFormState = (showForm, state) => {
//   return {
//     index: state.id,
//     showFormDialog: showForm,
//     deletefromState: state.showDeleteDialog,
//     allData: state.allData,
//     searchData: state.searchData,
//   };
// };

// export const setShowDeleteFormState = (showForm, state) => {
//   return {
//     index: state.id,
//     showFormDialog: state.showFormDialog,
//     deletefromState: showForm,
//     allData: state.allData,
//     searchData: state.searchData,
//   };
// };

export const searchStateByName = (text, state) => {
  let tempData = state.allData.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );
  return { allData: state.allData, searchData: tempData };
};

export const loadCourses = (text, state) => {
  let tempData = state.allData.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );
  return { allData: state.allData, searchData: tempData };
};

export const filter = (id, state) => {
  // // console.log(typeof state.allLessons[0].course_id);
  // console.log(typeof id);
  if (id == -1) {
    // console.log("clean");
    return {
      ...state,
      isFiltered: false,
      filteredLessons: null,
    };
  } else {
    // let tempData = state.allLessons.filter((lesson) => {
    //   if (lesson.course_id == id) {
    //     console.log("true");
    //     return lesson;
    //   }
    // });
    let tempData = state.allLessons.filter((lesson) => lesson.course_id == id);
    // if (tempData.length === 0) {
    //   tempData = [];
    // }
    // console.log("filtered");
    return {
      ...state,
      isFiltered: true,
      filteredLessons: tempData,
    };
  }
};
