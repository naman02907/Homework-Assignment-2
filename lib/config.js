// Container for all the environments
var environments = {};

// We will create 2 env, Staging and Production, staging as default

// default
environments.staging = {
    'httpPort' : 8080,
    'envName' : 'staging',
    'hashingSecret' : 'secret',
    'salestax' : 10,
    'stripe' : {
        'secretKey' : 'key'
    },
    'mailgun' : {
        'apiKey' : 'key'
    }
 };


 // Production 
environments.production = {
    'httpPort' : 3000,
    'envName' : 'production',
    'hashingSecret' : 'secret',
    'salestax' : 10,
    'stripe' : {
        'secretKey' : 'key'
    },
    'mailgun' : {
        'apiKey' : 'key'
    }
};

// Determine which env was passed as commond-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current env is set to one of the env above, if not default to staging.
var environmentsToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentsToExport;
