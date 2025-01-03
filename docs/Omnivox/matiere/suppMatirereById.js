module.exports = {
    // operation's method
    delete: {
      tags: ["MATIERE CRUD operations"], // operation's tag.
      description: "Supprimer une nmatière par son Id", // operation's desc.
      operationId: "delMatireById", // unique operation ID
      parameters: [
        {
          // id model
            in: "path",
            name: "id",
            required: true,
            description: "An id of a course", // desc
            schema: {
              type: "integer", // data type
              minimum: 1
            }
          },
      ],
      requestBody: {
        // expected request body
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "Le token de l'utilisateur"
                }
              },
              required: ["token"], // Mandatory fields
            },
          },
        },
      },
      responses: {
        // response code
        201: {
          description: "Matière supprimée avec succès", // response desc.
        },
        // response code
        401: {
          description: "Not authorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorUnauthorized", // error data model
              },
            },
          },
        },
        403: {
          description: "Forbidden", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/forbidden", // error data model
              },
            },
          },
        },
      },
    },
};
