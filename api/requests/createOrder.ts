const query = gql`
  mutation createOrder(
    $name: String
    $phone: String
    $carId: Int
    $messenger: String = ""
    $ref_code: String = ""
  ) {
    create_orders_item(
      data: {
        name: $name
        phone_number: $phone
        car: $carId
        messenger: $messenger
        ref_code: $ref_code
      }
    )
  }
`;

export function createOrder(variables: {
  "name": string,
  "phone": string,
  "carId": number,
  "messenger"?: string | null,
  "ref_code"?: string | null
}) {
  return useMutation(query, {
    variables,
  });
}
