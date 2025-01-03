module.exports = {
    // operation's method
    post: {
      tags: ["USER CRUD operations"], // operation's tag.
      description: "Connexion d'un utilisateur", // operation's desc.
      operationId: "loginUser", // unique operation ID
      requestBody: {
        // expected request body
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "L'email de l'utilisateur",
                },
                password: {
                  type: "string",
                  description: "Le mot de passe de l'utilisateur",
                },
              },
              required: ["email", "password"], // Mandatory fields
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Connexion réussi avec succès", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/token", // user data model
              },
            },
          },
        },
        401: {
          description: "Données invalides", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorUnauthorized", // error data model
              },
            },
          },
        },
      },
    },
};
