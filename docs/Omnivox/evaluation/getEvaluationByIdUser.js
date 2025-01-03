module.exports = {
    // operation's method
    get: {
      tags: ["EVALUATION CRUD operations"], // operation's tag.
      description: "Récupérer une évaluation par l'id de l'utilisateur", // operation's desc.
      operationId: "getEvaluationByIdUSer", // unique operation ID
      parameters: [
        {
          // id model
            in: "path",
            name: "user_id",
            required: true,
            description: "An id of an user", // desc
            schema: {
              type: "integer", // data type
              minimum: 1
            }
          },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Matière récupérée avec succès", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Evaluation", // user data model
              },
            },
          },
        },
      },
    },
};
