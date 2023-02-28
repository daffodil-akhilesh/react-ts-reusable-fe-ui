module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('New Package', {
    description: 'Creating a New Package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Specify the Name of the Package'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'addMany',
        destination: './packages/{{name}}',
        base: './plopfiletemplate/',
        templateFiles: './plopfiletemplate/**',
        stripExtensions: ['hbs'],
        verbose: true,
      }
    ]  // array of actions
  });
};