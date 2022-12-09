/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\tconst form = document.querySelector(\"#new-task-form\");\n\tconst input = document.querySelector(\"#new-task-input\");\n\tconst listElement = document.querySelector(\"#tasks\");\n\n\tform.addEventListener('submit', (e) => {\n\t\te.preventDefault();\n\n\t\tconst task = input.value;\n\n\t\tconst taskElement = document.createElement('div');\n\t\ttaskElement.classList.add('task');\n\n\t\tconst taskContent = document.createElement('div');\n\t\ttaskContent.classList.add('content');\n\n\t\ttaskElement.appendChild(taskContent);\n\n\t\tconst taskInput = document.createElement('input');\n\t\ttaskInput.classList.add('text');\n\t\ttaskInput.type = 'text';\n\t\ttaskInput.value = task;\n\t\ttaskInput.setAttribute('readonly','readonly');\n\n\t\ttaskContent.appendChild(taskInput);\n\n\t\tconst taskActions = document.createElement('div');\n\t\ttaskActions.classList.add('actions');\n\t\t\n\t\tconst taskEdit = document.createElement('button');\n\t\ttaskEdit.classList.add('edit');\n\t\ttaskEdit.innerText = 'Edit';\n\n\t\tconst taskDelete = document.createElement('button');\n\t\ttaskDelete.classList.add('delete');\n\t\ttaskDelete.innerText = 'Delete';\n\n\t\ttaskActions.appendChild(taskEdit);\n\t\ttaskActions.appendChild(taskDelete);\n\n\t\ttaskElement.appendChild(taskActions);\n\n\t\tlistElement.appendChild(taskElement);\n\n\t\tinput.value = '';\n\n\t\ttaskEdit.addEventListener('click', (e) => {\n\t\t\tif (taskEdit.innerText.toLowerCase() == \"edit\") {\n\t\t\t\ttaskEdit.innerText = \"Save\";\n\t\t\t\ttaskInput.removeAttribute(\"readonly\");\n\t\t\t} else {\n\t\t\t\ttaskEdit.innerText = \"Edit\";\n\t\t\t\ttaskInput.setAttribute(\"readonly\", \"readonly\");\n\t\t\t}\n\t\t});\n\n\t\ttaskDelete.addEventListener('click', (e) => {\n\t\t\tlistElement.removeChild(taskElement);\n\t\t});\n\t});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;