declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;
  export = Schema;
}
declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;
  export = Schema;
}

declare global {
  interface QFormOrganizer {
    _rebuildForms(): void; // Метод без параметров и возвращаемого значения
    // Добавьте другие методы и свойства, если необходимо
  }

  const QFormOrganizer: QFormOrganizer;
}
