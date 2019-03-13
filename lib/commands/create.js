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

                  function source(_x, _x2) {
                    return _source.apply(this, arguments);
                  }

                  return source;
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

  function create() {
    return _create.apply(this, arguments);
  }

  return create;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiaW5xdWlyZXIiLCJyZWdpc3RlclByb21wdCIsImF1dG9Db21wbGV0ZVByb21wdCIsImZldGNoVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRlc3QiLCJjb25zb2xlIiwibG9nIiwic3RhcnRzV2l0aCIsImNoYWxrIiwiZ3JlZW4iLCJyZWQiLCJnZXRHaXRIdWJSZXBvIiwiZG93bmxvYWRHaXRSZXBvIiwiZXhhbXBsZUxpc3QiLCJpbmNsdWRlcyIsImZzIiwiY29weSIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwibmFtZSIsImlzQ0xJIiwicHJvbXB0cyIsInJlYWRkaXIiLCJmaWxlcyIsImZpbHRlciIsImQiLCJleGFtcGxlQ2hvaWNlcyIsInB1c2giLCJ0eXBlIiwibWVzc2FnZSIsImRlZmF1bHQiLCJzb3VyY2UiLCJhbnN3ZXJzU29GYXIiLCJpbnB1dCIsInNob3VsZFByb21wdCIsInByb21wdCIsImFuc3dlcnMiLCJFcnJvciIsInByb2Nlc3MiLCJjd2QiLCJnaXRodWJSZXBvTmFtZSIsInBhdGhFeGlzdHNTeW5jIiwiam9pbiIsIm1vdmUiLCJyZW1vdmVTeW5jIiwiaXNZYXJuIiwic2hvdWxkVXNlWWFybiIsImhleCIsIkNoYWxrQ29sb3IiLCJ5YXJuIiwibnBtIiwiY3JlYXRlIiwic3RkaW8iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxrQkFBU0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0MsbUNBQXhDOzs7Ozs7OzRCQUVnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQStJQ0MsYUEvSUQ7QUFBQTtBQUFBOztBQUFBO0FB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aUNBQVMsbUJBQVQsRUFBOEI7QUFBRU0sTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBOUI7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhELENBR0UsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxLQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZ2l0IGZyb20gJ2dpdC1wcm9taXNlJ1xuaW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IGF1dG9Db21wbGV0ZVByb21wdCBmcm9tICdpbnF1aXJlci1hdXRvY29tcGxldGUtcHJvbXB0J1xuaW1wb3J0IG1hdGNoU29ydGVyIGZyb20gJ21hdGNoLXNvcnRlcidcbmltcG9ydCBkb3dubG9hZEdpdFJlcG8gZnJvbSAnZG93bmxvYWQtZ2l0LXJlcG8nXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgQ2hhbGtDb2xvciwgdGltZSwgdGltZUVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5pbnF1aXJlci5yZWdpc3RlclByb21wdCgnYXV0b2NvbXBsZXRlJywgYXV0b0NvbXBsZXRlUHJvbXB0KVxuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gY3JlYXRlKHsgbmFtZSwgdGVtcGxhdGUsIGlzQ0xJIH0gPSB7fSkge1xuICBjb25zdCBwcm9tcHRzID0gW11cblxuICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL2V4YW1wbGVzLycpKVxuXG4gIGNvbnNvbGUubG9nKCcnKVxuXG4gIGxldCBleGFtcGxlTGlzdCA9IGZpbGVzLmZpbHRlcihkID0+ICFkLnN0YXJ0c1dpdGgoJy4nKSlcbiAgZXhhbXBsZUxpc3QgPSBbJ2Jhc2ljJywgLi4uZXhhbXBsZUxpc3QuZmlsdGVyKGQgPT4gZCAhPT0gJ2Jhc2ljJyldXG4gIGNvbnN0IGV4YW1wbGVDaG9pY2VzID0gWy4uLmV4YW1wbGVMaXN0LCAnY3VzdG9tJ11cblxuICAvLyBwcm9tcHQgaWYgLS1uYW1lIGFyZ3VtZW50IGlzIG5vdCBwYXNzZWQgZnJvbSBDTElcbiAgLy8gd2FybmluZzogc2luY2UgbmFtZSB3aWxsIGJlIHNldCBhcyBhIGZ1bmN0aW9uIGJ5IGNvbW1hbmRlciBieSBkZWZhdWx0XG4gIC8vICAgdW5sZXNzIGl0J3MgYXNzaWduZWQgYXMgYW4gYXJndW1lbnQgZnJvbSB0aGUgQ0xJLCB3ZSBjYW4ndCBzaW1wbHkganVzdFxuICAvLyAgIGNoZWNrIGZvciBpdCdzIGV4aXN0ZW5jZS4gaWYgaXQncyBub3QgYmVlbiBzZXQgYnkgdGhlIENMSSwgd2UgcHJvcGVybHlcbiAgLy8gICBzZXQgaXQgdG8gbnVsbCBmb3IgbGF0ZXIgY29uZGl0aW9uYWwgY2hlY2tzLlxuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgbmFtZSA9IG51bGxcbiAgICBwcm9tcHRzLnB1c2goe1xuICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIG1lc3NhZ2U6ICdXaGF0IHNob3VsZCB3ZSBuYW1lIHRoaXMgcHJvamVjdD8nLFxuICAgICAgZGVmYXVsdDogJ215LXN0YXRpYy1zaXRlJyxcbiAgICB9KVxuICB9XG5cbiAgLy8gcHJvbXB0IGlmIC0tdGVtcGxhdGUgYXJndW1lbnQgaXMgbm90IHBhc3NlZCBmcm9tIENMSVxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgcHJvbXB0cy5wdXNoKHtcbiAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgbmFtZTogJ3RlbXBsYXRlJyxcbiAgICAgIG1lc3NhZ2U6ICdTZWxlY3QgYSB0ZW1wbGF0ZSBiZWxvdy4uLicsXG4gICAgICBzb3VyY2U6IGFzeW5jIChhbnN3ZXJzU29GYXIsIGlucHV0KSA9PlxuICAgICAgICAhaW5wdXQgPyBleGFtcGxlQ2hvaWNlcyA6IG1hdGNoU29ydGVyKGV4YW1wbGVDaG9pY2VzLCBpbnB1dCksXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNob3VsZFByb21wdCA9IGlzQ0xJICYmICghbmFtZSB8fCAhdGVtcGxhdGUpXG4gIGNvbnN0IGFuc3dlcnMgPSBzaG91bGRQcm9tcHQgPyBhd2FpdCBpbnF1aXJlci5wcm9tcHQocHJvbXB0cykgOiB7fVxuXG4gIGlmIChhbnN3ZXJzLm5hbWUpIHtcbiAgICBuYW1lID0gYW5zd2Vycy5uYW1lXG4gIH1cbiAgaWYgKGFuc3dlcnMudGVtcGxhdGUpIHtcbiAgICB0ZW1wbGF0ZSA9IGFuc3dlcnMudGVtcGxhdGVcbiAgfVxuXG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdBIHByb2plY3QgbmFtZSBpcyByZXF1aXJlZC4gUGxlYXNlIHVzZSBvcHRpb25zLm5hbWUgdG8gZGVmaW5lIG9uZS4nXG4gICAgKVxuICB9XG5cbiAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdBIHByb2plY3QgdGVtcGxhdGUgaXMgcmVxdWlyZWQuIFBsZWFzZSB1c2Ugb3B0aW9ucy50ZW1wbGF0ZSB0byBkZWZpbmUgb25lLidcbiAgICApXG4gIH1cblxuICB0aW1lKGNoYWxrLmdyZWVuKGA9PiBbXFx1MjcxM10gUHJvamVjdCBcIiR7bmFtZX1cIiBjcmVhdGVkYCkpXG4gIGNvbnNvbGUubG9nKCc9PiBDcmVhdGluZyBuZXcgcmVhY3Qtc3RhdGljIHByb2plY3QuLi4nKVxuICBjb25zdCBkZXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIG5hbWUpXG5cbiAgaWYgKHRlbXBsYXRlID09PSAnY3VzdG9tJykge1xuICAgIGNvbnN0IHsgZ2l0aHViUmVwb05hbWUgfSA9IGF3YWl0IGlucXVpcmVyLnByb21wdChbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIG5hbWU6ICdnaXRodWJSZXBvTmFtZScsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ1NwZWNpZnkgdGhlIGZ1bGwgYWRkcmVzcyBvZiBhIHB1YmxpYyBnaXQgcmVwbyBmcm9tIEdpdEh1YiwgQml0QnVja2V0LCBHaXRMYWIsIGV0Yy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lck5hbWUvcmVwb05hbWUuZ2l0KScsXG4gICAgICAgIGRlZmF1bHQ6ICdiYXNpYycsXG4gICAgICB9LFxuICAgIF0pXG4gICAgdGVtcGxhdGUgPSBnaXRodWJSZXBvTmFtZVxuICB9XG5cbiAgLy8gRmV0Y2ggdGVtcGxhdGVcbiAgYXdhaXQgZmV0Y2hUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGVzdClcblxuICAvLyBTaW5jZSBucG0gcGFja2FnaW5nIHdpbGwgY2xvYmJlciAuZ2l0aWdub3JlIGZpbGVzXG4gIC8vIFdlIG5lZWQgdG8gcmVuYW1lIHRoZSBnaXRpZ25vcmUgZmlsZSB0byAuZ2l0aWdub3JlXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25wbS9ucG0vaXNzdWVzLzE4NjJcblxuICBpZiAoIWZzLnBhdGhFeGlzdHNTeW5jKHBhdGguam9pbihkZXN0LCAnLmdpdGlnbm9yZScpKSkge1xuICAgIGF3YWl0IGZzLm1vdmUocGF0aC5qb2luKGRlc3QsICdnaXRpZ25vcmUnKSwgcGF0aC5qb2luKGRlc3QsICcuZ2l0aWdub3JlJykpXG4gIH1cbiAgaWYgKGZzLnBhdGhFeGlzdHNTeW5jKHBhdGguam9pbihkZXN0LCAnZ2l0aWdub3JlJykpKSB7XG4gICAgZnMucmVtb3ZlU3luYyhwYXRoLmpvaW4oZGVzdCwgJ2dpdGlnbm9yZScpKVxuICB9XG5cbiAgY29uc3QgaXNZYXJuID0gc2hvdWxkVXNlWWFybigpXG5cbiAgaWYgKGlzQ0xJKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgPT4gSW5zdGFsbGluZyBkZXBlbmRlbmNpZXMgd2l0aDogJHtcbiAgICAgICAgaXNZYXJuXG4gICAgICAgICAgPyBjaGFsay5oZXgoQ2hhbGtDb2xvci55YXJuKSgnWWFybicpXG4gICAgICAgICAgOiBjaGFsay5oZXgoQ2hhbGtDb2xvci5ucG0pKCdOUE0nKVxuICAgICAgfS4uLmBcbiAgICApXG4gICAgLy8gV2UgaW5zdGFsbCByZWFjdC1zdGF0aWMgc2VwYXJhdGVseSB0byBlbnN1cmUgd2UgYWx3YXlzIGhhdmUgdGhlIGxhdGVzdCBzdGFibGUgcmVsZWFzZVxuICAgIGV4ZWNTeW5jKFxuICAgICAgYGNkICR7bmFtZX0gJiYgJHtpc1lhcm4gPyAneWFybicgOiAnbnBtIGluc3RhbGwnfSAmJiAke1xuICAgICAgICBpc1lhcm5cbiAgICAgICAgICA/ICd5YXJuIGFkZCByZWFjdC1zdGF0aWNAbGF0ZXN0J1xuICAgICAgICAgIDogJ25wbSBpbnN0YWxsIHJlYWN0LXN0YXRpY0BsYXRlc3QgLS1zYXZlJ1xuICAgICAgfWBcbiAgICApXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKGA9PiBbXFx1MjcxM10gUHJvamVjdCBcIiR7bmFtZX1cIiBjcmVhdGVkYCkpXG5cbiAgY29uc29sZS5sb2coYFxuICAke2NoYWxrLmdyZWVuKCc9PiBUbyBnZXQgc3RhcnRlZDonKX1cblxuICAgIGNkICR7bmFtZX0gJHtcbiAgICAhaXNDTElcbiAgICAgID8gYCYmICR7XG4gICAgICAgICAgaXNZYXJuXG4gICAgICAgICAgICA/IGNoYWxrLmhleChDaGFsa0NvbG9yLnlhcm4pKCd5YXJuJylcbiAgICAgICAgICAgIDogY2hhbGsuaGV4KENoYWxrQ29sb3IubnBtKSgnbnBtIGluc3RhbGwnKVxuICAgICAgICB9YFxuICAgICAgOiAnJ1xuICB9XG5cbiAgICAke1xuICAgICAgaXNZYXJuXG4gICAgICAgID8gY2hhbGsuaGV4KENoYWxrQ29sb3IueWFybikoJ3lhcm4nKVxuICAgICAgICA6IGNoYWxrLmhleChDaGFsa0NvbG9yLm5wbSkoJ25wbSBydW4nKVxuICAgIH0gc3RhcnQgJHtjaGFsay5ncmVlbignLSBTdGFydCB0aGUgZGV2ZWxvcG1lbnQgc2VydmVyJyl9XG4gICAgJHtcbiAgICAgIGlzWWFyblxuICAgICAgICA/IGNoYWxrLmhleChDaGFsa0NvbG9yLnlhcm4pKCd5YXJuJylcbiAgICAgICAgOiBjaGFsay5oZXgoQ2hhbGtDb2xvci5ucG0pKCducG0gcnVuJylcbiAgICB9IGJ1aWxkICR7Y2hhbGsuZ3JlZW4oJy0gQnVpbGQgZm9yIHByb2R1Y3Rpb24nKX1cbiAgICAke1xuICAgICAgaXNZYXJuXG4gICAgICAgID8gY2hhbGsuaGV4KENoYWxrQ29sb3IueWFybikoJ3lhcm4nKVxuICAgICAgICA6IGNoYWxrLmhleChDaGFsa0NvbG9yLm5wbSkoJ25wbSBydW4nKVxuICAgIH0gc2VydmUgJHtjaGFsay5ncmVlbignLSBUZXN0IGEgcHJvZHVjdGlvbiBidWlsZCBsb2NhbGx5Jyl9XG4gIGApXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGVzdCkge1xuICAgIGNvbnNvbGUubG9nKCcnKVxuICAgIGlmICh0ZW1wbGF0ZS5zdGFydHNXaXRoKCdodHRwczovLycpIHx8IHRlbXBsYXRlLnN0YXJ0c1dpdGgoJ2dpdEAnKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYERvd25sb2FkaW5nIHRlbXBsYXRlOiAke3RlbXBsYXRlfWApKVxuICAgICAgICBhd2FpdCBnaXQoYGNsb25lIC0tcmVjdXJzaXZlICR7dGVtcGxhdGV9ICR7ZGVzdH1gKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChgRG93bmxvYWQgb2YgJHt0ZW1wbGF0ZX0gZmFpbGVkYCkpXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVtcGxhdGUuc3RhcnRzV2l0aCgnaHR0cDovLycpKSB7XG4gICAgICAvLyB1c2UgZG93bmxvYWQtZ2l0LXJlcG8gdG8gZmV0Y2ggcmVtb3RlIHJlcG9zaXRvcnlcbiAgICAgIGNvbnN0IGdldEdpdEh1YlJlcG8gPSBwcm9taXNpZnkoZG93bmxvYWRHaXRSZXBvKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYERvd25sb2FkaW5nIHRlbXBsYXRlOiAke3RlbXBsYXRlfWApKVxuICAgICAgICBhd2FpdCBnZXRHaXRIdWJSZXBvKHRlbXBsYXRlLCBkZXN0KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChgRG93bmxvYWQgb2YgJHt0ZW1wbGF0ZX0gZmFpbGVkYCkpXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBpdCdzIGFuIGV4YXBtbGUgdGVtcGxhdGUsIGNvcHkgaXQgZnJvbSB0aGVyZVxuICAgICAgaWYgKGV4YW1wbGVMaXN0LmluY2x1ZGVzKHRlbXBsYXRlKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKGBVc2luZyB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX1gKSlcbiAgICAgICAgICByZXR1cm4gZnMuY29weShcbiAgICAgICAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuLi8uLi9leGFtcGxlcy8ke3RlbXBsYXRlfWApLFxuICAgICAgICAgICAgZGVzdFxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkKGBDb3B5aW5nIHRoZSB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX0gZmFpbGVkYCkpXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHRlbXBsYXRlIG11c3QgYmUgbG9jYWwsIGNvcHkgZGlyZWN0bHlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKGBVc2luZyB0ZW1wbGF0ZSBmcm9tIGRpcmVjdG9yeTogJHt0ZW1wbGF0ZX1gKSlcbiAgICAgICAgYXdhaXQgZnMuY29weShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCB0ZW1wbGF0ZSksIGRlc3QpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgY2hhbGsucmVkKGBDb3B5aW5nIHRoZSB0ZW1wbGF0ZSBmcm9tIGRpcmVjdG9yeTogJHt0ZW1wbGF0ZX0gZmFpbGVkYClcbiAgICAgICAgKVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHNob3VsZFVzZVlhcm4oKSB7XG4gIHRyeSB7XG4gICAgZXhlY1N5bmMoJ3lhcm5wa2cgLS12ZXJzaW9uJywgeyBzdGRpbzogJ2lnbm9yZScgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cbiJdfQ==