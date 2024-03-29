import fs from 'fs';
import glob from 'glob';
import path from 'path';

const getLcovFiles = function (coverageDir) {
  return new Promise((resolve, reject) => {
    glob(`${coverageDir}/**/lcov.info`, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
};

(async function () {
  const files = await getLcovFiles('coverage');
  const mergedFile = path.join('coverage', 'lcov.info');

  console.log('Merging following files:', files + ' into: ' + mergedFile);
  const mergedReport = files.reduce(
    (mergedReport, currFile) => (mergedReport += fs.readFileSync(currFile)),
    ''
  );
  await fs.writeFile(path.resolve(mergedFile), mergedReport, (err) => {
    if (err) console.log('unable to generate coverage report', err);
    console.log('merged coverage file has been saved!');
  });
})();
