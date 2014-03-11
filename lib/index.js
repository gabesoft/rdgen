var optimist = require('optimist')
  , path     = require('path')
  , colors   = require('colors')
  , srunner  = require('srunner')
  , log      = new srunner.Logger({ keepBlankLines: true })
  , runner   = srunner.create({ log: log })
  , params   = optimist
      .usage('Generates files for a rind module')
      .alias('p', 'path').describe('p', 'module path relative to the modules folder i.e objects/user/common')
  , argv     = params.argv
  , root     = path.join(__dirname, '..')
  , moddir   = path.join(process.cwd(), 'modules', argv.path.replace(/\.mod/, '') + '.mod');

runner
    .init({
        dir   : path.join(root, 'lib')
      , state : {
            root      : root
          , templates : path.join(root, 'templates')
        }
      , quiet : true
    });

runner.ensureDirExists({ dir: path.join(moddir, 'client/controllers') });
runner.ensureDirExists({ dir: path.join(moddir, 'client/models') });
runner.ensureDirExists({ dir: path.join(moddir, 'client/views') });
runner.ensureDirExists({ dir: path.join(moddir, 'lib') });
runner.ensureDirExists({ dir: path.join(moddir, 'styles') });
runner.ensureDirExists({ dir: path.join(moddir, 'templates') });

runner.run();
