"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _path = _interopRequireDefault(require("path"));

var _gitPromise = _interopRequireDefault(require("git-promise"));

var _child_process = require("child_process");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _inquirerAutocompletePrompt = _interopRequireDefault(require("inquirer-autocomplete-prompt"));

var _matchSorter = _interopRequireDefault(require("match-sorter"));

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _util = require("util");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_inquirer.default.registerPrompt('autocomplete', _inquirerAutocompletePrompt.default);

var _default =
/*#__PURE__*/
function () {
  var _create = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var _ref,
        name,
        template,
        isCLI,
        prompts,
        files,
        exampleList,
        exampleChoices,
        shouldPrompt,
        answers,
        dest,
        _ref2,
        githubRepoName,
        isYarn,
        fetchTemplate,
        _fetchTemplate,
        _args3 = arguments;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _fetchTemplate = function _ref4() {
              _fetchTemplate = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(template, dest) {
                var getGitHubRepo;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('');

                        if (!(template.startsWith('https://') || template.startsWith('git@'))) {
                          _context2.next = 14;
                          break;
                        }

                        _context2.prev = 2;
                        console.log(_chalk.default.green("Downloading template: ".concat(template)));
                        _context2.next = 6;
                        return (0, _gitPromise.default)("clone --recursive ".concat(template, " ").concat(dest));

                      case 6:
                        _context2.next = 12;
                        break;

                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](2);
                        console.log(_chalk.default.red("Download of ".concat(template, " failed")));
                        throw _context2.t0;

                      case 12:
                        _context2.next = 48;
                        break;

                      case 14:
                        if (!template.startsWith('http://')) {
                          _context2.next = 28;
                          break;
                        }

                        // use download-git-repo to fetch remote repository
                        getGitHubRepo = (0, _util.promisify)(_downloadGitRepo.default);
                        _context2.prev = 16;
                        console.log(_chalk.default.green("Downloading template: ".concat(template)));
                        _context2.next = 20;
                        return getGitHubRepo(template, dest);

                      case 20:
                        _context2.next = 26;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t1 = _context2["catch"](16);
                        console.log(_chalk.default.red("Download of ".concat(template, " failed")));
                        throw _context2.t1;

                      case 26:
                        _context2.next = 48;
                        break;

                      case 28:
                        if (!exampleList.includes(template)) {
                          _context2.next = 38;
                          break;
                        }

                        _context2.prev = 29;
                        console.log(_chalk.default.green("Using template: ".concat(template)));
                        return _context2.abrupt("return", _fsExtra.default.copy(_path.default.resolve(__dirname, "../../examples/".concat(template)), dest));

                      case 34:
                        _context2.prev = 34;
                        _context2.t2 = _context2["catch"](29);
                        console.log(_chalk.default.red("Copying the template: ".concat(template, " failed")));
                        throw _context2.t2;

                      case 38:
                        _context2.prev = 38;
                        console.log(_chalk.default.green("Using template from directory: ".concat(template)));
                        _context2.next = 42;
                        return _fsExtra.default.copy(_path.default.resolve(__dirname, template), dest);

                      case 42:
                        _context2.next = 48;
                        break;

                      case 44:
                        _context2.prev = 44;
                        _context2.t3 = _context2["catch"](38);
                        console.log(_chalk.default.red("Copying the template from directory: ".concat(template, " failed")));
                        throw _context2.t3;

                      case 48:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[2, 8], [16, 22], [29, 34], [38, 44]]);
              }));
              return _fetchTemplate.apply(this, arguments);
            };

            fetchTemplate = function _ref3(_x3, _x4) {
              return _fetchTemplate.apply(this, arguments);
            };

            _ref = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, name = _ref.name, template = _ref.template, isCLI = _ref.isCLI;
            prompts = [];
            _context3.next = 6;
            return _fsExtra.default.readdir(_path.default.resolve(__dirname, '../../examples/'));

          case 6:
            files = _context3.sent;
            console.log('');
            exampleList = files.filter(function (d) {
              return !d.startsWith('.');
            });
            exampleList = ['basic'].concat(_toConsumableArray(exampleList.filter(function (d) {
              return d !== 'basic';
            })));
            exampleChoices = _toConsumableArray(exampleList).concat(['custom']); // prompt if --name argument is not passed from CLI
            // warning: since name will be set as a function by commander by default
            //   unless it's assigned as an argument from the CLI, we can't simply just
            //   check for it's existence. if it's not been set by the CLI, we properly
            //   set it to null for later conditional checks.

            if (typeof name !== 'string') {
              name = null;
              prompts.push({
                type: 'input',
                name: 'name',
                message: 'What should we name this project?',
                default: 'my-static-site'
              });
            } // prompt if --template argument is not passed from CLI


            if (!template) {
              prompts.push({
                type: 'autocomplete',
                name: 'template',
                message: 'Select a template below...',
                source: function () {
                  var _source = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(answersSoFar, input) {
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", !input ? exampleChoices : (0, _matchSorter.default)(exampleChoices, input));

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function source(_x, _x2) {
                    return _source.apply(this, arguments);
                  };
                }()
              });
            }

            shouldPrompt = isCLI && (!name || !template);

            if (!shouldPrompt) {
              _context3.next = 20;
              break;
            }

            _context3.next = 17;
            return _inquirer.default.prompt(prompts);

          case 17:
            _context3.t0 = _context3.sent;
            _context3.next = 21;
            break;

          case 20:
            _context3.t0 = {};

          case 21:
            answers = _context3.t0;

            if (answers.name) {
              name = answers.name;
            }

            if (answers.template) {
              template = answers.template;
            }

            if (name) {
              _context3.next = 26;
              break;
            }

            throw new Error('A project name is required. Please use options.name to define one.');

          case 26:
            if (template) {
              _context3.next = 28;
              break;
            }

            throw new Error('A project template is required. Please use options.template to define one.');

          case 28:
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Project \"".concat(name, "\" created")));
            console.log('=> Creating new react-static project...');
            dest = _path.default.resolve(process.cwd(), name);

            if (!(template === 'custom')) {
              _context3.next = 37;
              break;
            }

            _context3.next = 34;
            return _inquirer.default.prompt([{
              type: 'input',
              name: 'githubRepoName',
              message: 'Specify the full address of a public git repo from GitHub, BitBucket, GitLab, etc. (https://github.com/ownerName/repoName.git)',
              default: 'basic'
            }]);

          case 34:
            _ref2 = _context3.sent;
            githubRepoName = _ref2.githubRepoName;
            template = githubRepoName;

          case 37:
            _context3.next = 39;
            return fetchTemplate(template, dest);

          case 39:
            if (_fsExtra.default.pathExistsSync(_path.default.join(dest, '.gitignore'))) {
              _context3.next = 42;
              break;
            }

            _context3.next = 42;
            return _fsExtra.default.move(_path.default.join(dest, 'gitignore'), _path.default.join(dest, '.gitignore'));

          case 42:
            if (_fsExtra.default.pathExistsSync(_path.default.join(dest, 'gitignore'))) {
              _fsExtra.default.removeSync(_path.default.join(dest, 'gitignore'));
            }

            isYarn = shouldUseYarn();

            if (isCLI) {
              console.log("=> Installing dependencies with: ".concat(isYarn ? _chalk.default.hex(_utils.ChalkColor.yarn)('Yarn') : _chalk.default.hex(_utils.ChalkColor.npm)('NPM'), "...")); // We install react-static separately to ensure we always have the latest stable release

              (0, _child_process.execSync)("cd ".concat(name, " && ").concat(isYarn ? 'yarn' : 'npm install', " && ").concat(isYarn ? 'yarn add react-static@latest' : 'npm install react-static@latest --save'));
              console.log('');
            }

            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Project \"".concat(name, "\" created")));
            console.log("\n  ".concat(_chalk.default.green('=> To get started:'), "\n\n    cd ").concat(name, " ").concat(!isCLI ? "&& ".concat(isYarn ? _chalk.default.hex(_utils.ChalkColor.yarn)('yarn') : _chalk.default.hex(_utils.ChalkColor.npm)('npm install')) : '', "\n\n    ").concat(isYarn ? _chalk.default.hex(_utils.ChalkColor.yarn)('yarn') : _chalk.default.hex(_utils.ChalkColor.npm)('npm run'), " start ").concat(_chalk.default.green('- Start the development server'), "\n    ").concat(isYarn ? _chalk.default.hex(_utils.ChalkColor.yarn)('yarn') : _chalk.default.hex(_utils.ChalkColor.npm)('npm run'), " build ").concat(_chalk.default.green('- Build for production'), "\n    ").concat(isYarn ? _chalk.default.hex(_utils.ChalkColor.yarn)('yarn') : _chalk.default.hex(_utils.ChalkColor.npm)('npm run'), " serve ").concat(_chalk.default.green('- Test a production build locally'), "\n  "));

          case 47:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function create() {
    return _create.apply(this, arguments);
  };
}();

exports.default = _default;

function shouldUseYarn() {
  try {
    (0, _child_process.execSync)('yarnpkg --version', {
      stdio: 'ignore'
    });
    return true;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiaW5xdWlyZXIiLCJyZWdpc3RlclByb21wdCIsImF1dG9Db21wbGV0ZVByb21wdCIsImZldGNoVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRlc3QiLCJjb25zb2xlIiwibG9nIiwic3RhcnRzV2l0aCIsImNoYWxrIiwiZ3JlZW4iLCJyZWQiLCJnZXRHaXRIdWJSZXBvIiwiZG93bmxvYWRHaXRSZXBvIiwiZXhhbXBsZUxpc3QiLCJpbmNsdWRlcyIsImZzIiwiY29weSIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwibmFtZSIsImlzQ0xJIiwicHJvbXB0cyIsInJlYWRkaXIiLCJmaWxlcyIsImZpbHRlciIsImQiLCJleGFtcGxlQ2hvaWNlcyIsInB1c2giLCJ0eXBlIiwibWVzc2FnZSIsImRlZmF1bHQiLCJzb3VyY2UiLCJhbnN3ZXJzU29GYXIiLCJpbnB1dCIsInNob3VsZFByb21wdCIsInByb21wdCIsImFuc3dlcnMiLCJFcnJvciIsInByb2Nlc3MiLCJjd2QiLCJnaXRodWJSZXBvTmFtZSIsInBhdGhFeGlzdHNTeW5jIiwiam9pbiIsIm1vdmUiLCJyZW1vdmVTeW5jIiwiaXNZYXJuIiwic2hvdWxkVXNlWWFybiIsImhleCIsIkNoYWxrQ29sb3IiLCJ5YXJuIiwibnBtIiwiY3JlYXRlIiwic3RkaW8iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxrQkFBU0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0MsbUNBQXhDOzs7Ozs7OzRCQUVnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQStJQ0MsYUEvSUQ7QUFBQTtBQUFBOztBQUFBO0FB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QThCO0FBQUVNLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQTlCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFdBQU8sS0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGdpdCBmcm9tICdnaXQtcHJvbWlzZSdcbmltcG9ydCB7IGV4ZWNTeW5jIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCBpbnF1aXJlciBmcm9tICdpbnF1aXJlcidcbmltcG9ydCBhdXRvQ29tcGxldGVQcm9tcHQgZnJvbSAnaW5xdWlyZXItYXV0b2NvbXBsZXRlLXByb21wdCdcbmltcG9ydCBtYXRjaFNvcnRlciBmcm9tICdtYXRjaC1zb3J0ZXInXG5pbXBvcnQgZG93bmxvYWRHaXRSZXBvIGZyb20gJ2Rvd25sb2FkLWdpdC1yZXBvJ1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCdcbmltcG9ydCB7IENoYWxrQ29sb3IsIHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi91dGlscydcblxuaW5xdWlyZXIucmVnaXN0ZXJQcm9tcHQoJ2F1dG9jb21wbGV0ZScsIGF1dG9Db21wbGV0ZVByb21wdClcblxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZSh7IG5hbWUsIHRlbXBsYXRlLCBpc0NMSSB9ID0ge30pIHtcbiAgY29uc3QgcHJvbXB0cyA9IFtdXG5cbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9leGFtcGxlcy8nKSlcblxuICBjb25zb2xlLmxvZygnJylcblxuICBsZXQgZXhhbXBsZUxpc3QgPSBmaWxlcy5maWx0ZXIoZCA9PiAhZC5zdGFydHNXaXRoKCcuJykpXG4gIGV4YW1wbGVMaXN0ID0gWydiYXNpYycsIC4uLmV4YW1wbGVMaXN0LmZpbHRlcihkID0+IGQgIT09ICdiYXNpYycpXVxuICBjb25zdCBleGFtcGxlQ2hvaWNlcyA9IFsuLi5leGFtcGxlTGlzdCwgJ2N1c3RvbSddXG5cbiAgLy8gcHJvbXB0IGlmIC0tbmFtZSBhcmd1bWVudCBpcyBub3QgcGFzc2VkIGZyb20gQ0xJXG4gIC8vIHdhcm5pbmc6IHNpbmNlIG5hbWUgd2lsbCBiZSBzZXQgYXMgYSBmdW5jdGlvbiBieSBjb21tYW5kZXIgYnkgZGVmYXVsdFxuICAvLyAgIHVubGVzcyBpdCdzIGFzc2lnbmVkIGFzIGFuIGFyZ3VtZW50IGZyb20gdGhlIENMSSwgd2UgY2FuJ3Qgc2ltcGx5IGp1c3RcbiAgLy8gICBjaGVjayBmb3IgaXQncyBleGlzdGVuY2UuIGlmIGl0J3Mgbm90IGJlZW4gc2V0IGJ5IHRoZSBDTEksIHdlIHByb3Blcmx5XG4gIC8vICAgc2V0IGl0IHRvIG51bGwgZm9yIGxhdGVyIGNvbmRpdGlvbmFsIGNoZWNrcy5cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBudWxsXG4gICAgcHJvbXB0cy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICBuYW1lOiAnbmFtZScsXG4gICAgICBtZXNzYWdlOiAnV2hhdCBzaG91bGQgd2UgbmFtZSB0aGlzIHByb2plY3Q/JyxcbiAgICAgIGRlZmF1bHQ6ICdteS1zdGF0aWMtc2l0ZScsXG4gICAgfSlcbiAgfVxuXG4gIC8vIHByb21wdCBpZiAtLXRlbXBsYXRlIGFyZ3VtZW50IGlzIG5vdCBwYXNzZWQgZnJvbSBDTElcbiAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgIHByb21wdHMucHVzaCh7XG4gICAgICB0eXBlOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgIG5hbWU6ICd0ZW1wbGF0ZScsXG4gICAgICBtZXNzYWdlOiAnU2VsZWN0IGEgdGVtcGxhdGUgYmVsb3cuLi4nLFxuICAgICAgc291cmNlOiBhc3luYyAoYW5zd2Vyc1NvRmFyLCBpbnB1dCkgPT5cbiAgICAgICAgIWlucHV0ID8gZXhhbXBsZUNob2ljZXMgOiBtYXRjaFNvcnRlcihleGFtcGxlQ2hvaWNlcywgaW5wdXQpLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBzaG91bGRQcm9tcHQgPSBpc0NMSSAmJiAoIW5hbWUgfHwgIXRlbXBsYXRlKVxuICBjb25zdCBhbnN3ZXJzID0gc2hvdWxkUHJvbXB0ID8gYXdhaXQgaW5xdWlyZXIucHJvbXB0KHByb21wdHMpIDoge31cblxuICBpZiAoYW5zd2Vycy5uYW1lKSB7XG4gICAgbmFtZSA9IGFuc3dlcnMubmFtZVxuICB9XG4gIGlmIChhbnN3ZXJzLnRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSBhbnN3ZXJzLnRlbXBsYXRlXG4gIH1cblxuICBpZiAoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQSBwcm9qZWN0IG5hbWUgaXMgcmVxdWlyZWQuIFBsZWFzZSB1c2Ugb3B0aW9ucy5uYW1lIHRvIGRlZmluZSBvbmUuJ1xuICAgIClcbiAgfVxuXG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQSBwcm9qZWN0IHRlbXBsYXRlIGlzIHJlcXVpcmVkLiBQbGVhc2UgdXNlIG9wdGlvbnMudGVtcGxhdGUgdG8gZGVmaW5lIG9uZS4nXG4gICAgKVxuICB9XG5cbiAgdGltZShjaGFsay5ncmVlbihgPT4gW1xcdTI3MTNdIFByb2plY3QgXCIke25hbWV9XCIgY3JlYXRlZGApKVxuICBjb25zb2xlLmxvZygnPT4gQ3JlYXRpbmcgbmV3IHJlYWN0LXN0YXRpYyBwcm9qZWN0Li4uJylcbiAgY29uc3QgZGVzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBuYW1lKVxuXG4gIGlmICh0ZW1wbGF0ZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBjb25zdCB7IGdpdGh1YlJlcG9OYW1lIH0gPSBhd2FpdCBpbnF1aXJlci5wcm9tcHQoW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBuYW1lOiAnZ2l0aHViUmVwb05hbWUnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdTcGVjaWZ5IHRoZSBmdWxsIGFkZHJlc3Mgb2YgYSBwdWJsaWMgZ2l0IHJlcG8gZnJvbSBHaXRIdWIsIEJpdEJ1Y2tldCwgR2l0TGFiLCBldGMuIChodHRwczovL2dpdGh1Yi5jb20vb3duZXJOYW1lL3JlcG9OYW1lLmdpdCknLFxuICAgICAgICBkZWZhdWx0OiAnYmFzaWMnLFxuICAgICAgfSxcbiAgICBdKVxuICAgIHRlbXBsYXRlID0gZ2l0aHViUmVwb05hbWVcbiAgfVxuXG4gIC8vIEZldGNoIHRlbXBsYXRlXG4gIGF3YWl0IGZldGNoVGVtcGxhdGUodGVtcGxhdGUsIGRlc3QpXG5cbiAgLy8gU2luY2UgbnBtIHBhY2thZ2luZyB3aWxsIGNsb2JiZXIgLmdpdGlnbm9yZSBmaWxlc1xuICAvLyBXZSBuZWVkIHRvIHJlbmFtZSB0aGUgZ2l0aWdub3JlIGZpbGUgdG8gLmdpdGlnbm9yZVxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ucG0vbnBtL2lzc3Vlcy8xODYyXG5cbiAgaWYgKCFmcy5wYXRoRXhpc3RzU3luYyhwYXRoLmpvaW4oZGVzdCwgJy5naXRpZ25vcmUnKSkpIHtcbiAgICBhd2FpdCBmcy5tb3ZlKHBhdGguam9pbihkZXN0LCAnZ2l0aWdub3JlJyksIHBhdGguam9pbihkZXN0LCAnLmdpdGlnbm9yZScpKVxuICB9XG4gIGlmIChmcy5wYXRoRXhpc3RzU3luYyhwYXRoLmpvaW4oZGVzdCwgJ2dpdGlnbm9yZScpKSkge1xuICAgIGZzLnJlbW92ZVN5bmMocGF0aC5qb2luKGRlc3QsICdnaXRpZ25vcmUnKSlcbiAgfVxuXG4gIGNvbnN0IGlzWWFybiA9IHNob3VsZFVzZVlhcm4oKVxuXG4gIGlmIChpc0NMSSkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYD0+IEluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIHdpdGg6ICR7XG4gICAgICAgIGlzWWFyblxuICAgICAgICAgID8gY2hhbGsuaGV4KENoYWxrQ29sb3IueWFybikoJ1lhcm4nKVxuICAgICAgICAgIDogY2hhbGsuaGV4KENoYWxrQ29sb3IubnBtKSgnTlBNJylcbiAgICAgIH0uLi5gXG4gICAgKVxuICAgIC8vIFdlIGluc3RhbGwgcmVhY3Qtc3RhdGljIHNlcGFyYXRlbHkgdG8gZW5zdXJlIHdlIGFsd2F5cyBoYXZlIHRoZSBsYXRlc3Qgc3RhYmxlIHJlbGVhc2VcbiAgICBleGVjU3luYyhcbiAgICAgIGBjZCAke25hbWV9ICYmICR7aXNZYXJuID8gJ3lhcm4nIDogJ25wbSBpbnN0YWxsJ30gJiYgJHtcbiAgICAgICAgaXNZYXJuXG4gICAgICAgICAgPyAneWFybiBhZGQgcmVhY3Qtc3RhdGljQGxhdGVzdCdcbiAgICAgICAgICA6ICducG0gaW5zdGFsbCByZWFjdC1zdGF0aWNAbGF0ZXN0IC0tc2F2ZSdcbiAgICAgIH1gXG4gICAgKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9XG5cbiAgdGltZUVuZChjaGFsay5ncmVlbihgPT4gW1xcdTI3MTNdIFByb2plY3QgXCIke25hbWV9XCIgY3JlYXRlZGApKVxuXG4gIGNvbnNvbGUubG9nKGBcbiAgJHtjaGFsay5ncmVlbignPT4gVG8gZ2V0IHN0YXJ0ZWQ6Jyl9XG5cbiAgICBjZCAke25hbWV9ICR7XG4gICAgIWlzQ0xJXG4gICAgICA/IGAmJiAke1xuICAgICAgICAgIGlzWWFyblxuICAgICAgICAgICAgPyBjaGFsay5oZXgoQ2hhbGtDb2xvci55YXJuKSgneWFybicpXG4gICAgICAgICAgICA6IGNoYWxrLmhleChDaGFsa0NvbG9yLm5wbSkoJ25wbSBpbnN0YWxsJylcbiAgICAgICAgfWBcbiAgICAgIDogJydcbiAgfVxuXG4gICAgJHtcbiAgICAgIGlzWWFyblxuICAgICAgICA/IGNoYWxrLmhleChDaGFsa0NvbG9yLnlhcm4pKCd5YXJuJylcbiAgICAgICAgOiBjaGFsay5oZXgoQ2hhbGtDb2xvci5ucG0pKCducG0gcnVuJylcbiAgICB9IHN0YXJ0ICR7Y2hhbGsuZ3JlZW4oJy0gU3RhcnQgdGhlIGRldmVsb3BtZW50IHNlcnZlcicpfVxuICAgICR7XG4gICAgICBpc1lhcm5cbiAgICAgICAgPyBjaGFsay5oZXgoQ2hhbGtDb2xvci55YXJuKSgneWFybicpXG4gICAgICAgIDogY2hhbGsuaGV4KENoYWxrQ29sb3IubnBtKSgnbnBtIHJ1bicpXG4gICAgfSBidWlsZCAke2NoYWxrLmdyZWVuKCctIEJ1aWxkIGZvciBwcm9kdWN0aW9uJyl9XG4gICAgJHtcbiAgICAgIGlzWWFyblxuICAgICAgICA/IGNoYWxrLmhleChDaGFsa0NvbG9yLnlhcm4pKCd5YXJuJylcbiAgICAgICAgOiBjaGFsay5oZXgoQ2hhbGtDb2xvci5ucG0pKCducG0gcnVuJylcbiAgICB9IHNlcnZlICR7Y2hhbGsuZ3JlZW4oJy0gVGVzdCBhIHByb2R1Y3Rpb24gYnVpbGQgbG9jYWxseScpfVxuICBgKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVtcGxhdGUodGVtcGxhdGUsIGRlc3QpIHtcbiAgICBjb25zb2xlLmxvZygnJylcbiAgICBpZiAodGVtcGxhdGUuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSB8fCB0ZW1wbGF0ZS5zdGFydHNXaXRoKCdnaXRAJykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKGBEb3dubG9hZGluZyB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX1gKSlcbiAgICAgICAgYXdhaXQgZ2l0KGBjbG9uZSAtLXJlY3Vyc2l2ZSAke3RlbXBsYXRlfSAke2Rlc3R9YClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoYERvd25sb2FkIG9mICR7dGVtcGxhdGV9IGZhaWxlZGApKVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlbXBsYXRlLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSkge1xuICAgICAgLy8gdXNlIGRvd25sb2FkLWdpdC1yZXBvIHRvIGZldGNoIHJlbW90ZSByZXBvc2l0b3J5XG4gICAgICBjb25zdCBnZXRHaXRIdWJSZXBvID0gcHJvbWlzaWZ5KGRvd25sb2FkR2l0UmVwbylcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKGBEb3dubG9hZGluZyB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX1gKSlcbiAgICAgICAgYXdhaXQgZ2V0R2l0SHViUmVwbyh0ZW1wbGF0ZSwgZGVzdClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoYERvd25sb2FkIG9mICR7dGVtcGxhdGV9IGZhaWxlZGApKVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgaXQncyBhbiBleGFwbWxlIHRlbXBsYXRlLCBjb3B5IGl0IGZyb20gdGhlcmVcbiAgICAgIGlmIChleGFtcGxlTGlzdC5pbmNsdWRlcyh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbihgVXNpbmcgdGVtcGxhdGU6ICR7dGVtcGxhdGV9YCkpXG4gICAgICAgICAgcmV0dXJuIGZzLmNvcHkoXG4gICAgICAgICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi4vLi4vZXhhbXBsZXMvJHt0ZW1wbGF0ZX1gKSxcbiAgICAgICAgICAgIGRlc3RcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChgQ29weWluZyB0aGUgdGVtcGxhdGU6ICR7dGVtcGxhdGV9IGZhaWxlZGApKVxuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0ZW1wbGF0ZSBtdXN0IGJlIGxvY2FsLCBjb3B5IGRpcmVjdGx5XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbihgVXNpbmcgdGVtcGxhdGUgZnJvbSBkaXJlY3Rvcnk6ICR7dGVtcGxhdGV9YCkpXG4gICAgICAgIGF3YWl0IGZzLmNvcHkocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdGVtcGxhdGUpLCBkZXN0KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGNoYWxrLnJlZChgQ29weWluZyB0aGUgdGVtcGxhdGUgZnJvbSBkaXJlY3Rvcnk6ICR7dGVtcGxhdGV9IGZhaWxlZGApXG4gICAgICAgIClcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuXG5mdW5jdGlvbiBzaG91bGRVc2VZYXJuKCkge1xuICB0cnkge1xuICAgIGV4ZWNTeW5jKCd5YXJucGtnIC0tdmVyc2lvbicsIHsgc3RkaW86ICdpZ25vcmUnIH0pXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG4iXX0=