export const online_payment_error_codes = {
  account_already_exists:
    "The email address provided for the creation of a deferred account already has an account associated with it. Use the OAuth flow to connect the existing account to your platform.",
  account_country_invalid_address:
    "The country of the business address provided does not match the country of the account. Businesses must be located in the same country as the account.",
  account_invalid:
    "The account ID provided as a value for the Stripe-Account header is invalid. Check that your requests are specifying a valid account ID.",
  account_number_invalid:
    "The bank account number provided is invalid (e.g., missing digits). Bank account information varies from country to country. We recommend creating validations in your entry forms based on the bank account formats we provide.",
  alipay_upgrade_required:
    "This method for creating Alipay payments is not supported anymore. Please upgrade your integration to use Sources instead.",
  amount_too_large:
    "The specified amount is greater than the maximum amount allowed. Use a lower amount and try again.",
  amount_too_small:
    "The specified amount is less than the minimum amount allowed. Use a higher amount and try again.",
  api_key_expired:
    "The API key provided has expired. Obtain your current API keys from the Dashboard and update your integration to use them.",
  balance_insufficient:
    "The transfer or payout could not be completed because the associated account does not have a sufficient balance available. Create a new transfer or payout using an amount less than or equal to the account’s available balance.",
  bank_account_exists:
    "The bank account provided already exists on the specified Customer object. If the bank account should also be attached to a different customer, include the correct customer ID when making the request again.",
  bank_account_unusable:
    "The bank account provided cannot be used for payouts. A different bank account must be used.",
  bank_account_unverified:
    "Your Connect platform is attempting to share an unverified bank account with a connected account.",
  bitcoin_upgrade_required:
    "This method for creating Bitcoin payments is not supported anymore. Please upgrade your integration to use Sources instead.",
  card_declined:
    "The card has been declined. When a card is declined, the error returned also includes the decline_code attribute with the reason why the card was declined. Refer to our decline codes documentation to learn more.",
  charge_already_captured:
    "The charge you’re attempting to capture has already been captured. Update the request with an uncaptured charge ID.",
  charge_already_refunded:
    "The charge you’re attempting to refund has already been refunded. Update the request to use the ID of a charge that has not been refunded.",
  charge_disputed:
    "The charge you’re attempting to refund has been charged back. Check the disputes documentation to learn how to respond to the dispute.",
  charge_exceeds_source_limit:
    "This charge would cause you to exceed your rolling-window processing limit for this source type. Please retry the charge later, or contact us to request a higher processing limit.",
  charge_expired_for_capture:
    "The charge cannot be captured as the authorization has expired. Auth and capture charges must be captured within seven days.",
  country_unsupported:
    "Your platform attempted to create a custom account in a country that is not yet supported. Make sure that users can only sign up in countries supported by custom accounts.",
  coupon_expired:
    "The coupon provided for a subscription or order has expired. Either create a new coupon, or use an existing one that is valid.",
  customer_max_subscriptions:
    "The maximum number of subscriptions for a customer has been reached. Contact us if you are receiving this error.",
  email_invalid:
    "The email address is invalid (e.g., not properly formatted). Check that the email address is properly formatted and only includes allowed characters.",
  expired_card:
    "The card has expired. Check the expiration date or use a different card.",
  idempotency_key_in_use:
    "The idempotency key provided is currently being used in another request. This occurs if your integration is making duplicate requests simultaneously.",
  incorrect_address:
    "The card’s address is incorrect. Check the card’s address or use a different card.",
  incorrect_cvc:
    "The card’s security code is incorrect. Check the card’s security code or use a different card.",
  incorrect_number:
    "The card number is incorrect. Check the card’s number or use a different card.",
  incorrect_zip:
    "The card’s postal code is incorrect. Check the card’s postal code or use a different card.",
  instant_payouts_unsupported:
    "The debit card provided as an external account does not support instant payouts. Provide another debit card or use a bank account instead.",
  invalid_card_type:
    "The card provided as an external account is not a debit card. Provide a debit card or use a bank account instead.",
  invalid_charge_amount:
    "The specified amount is invalid. The charge amount must be a positive integer in the smallest currency unit, and not exceed the minimum or maximum amount.",
  invalid_cvc:
    "The card’s security code is invalid. Check the card’s security code or use a different card.",
  invalid_expiry_month:
    "The card’s expiration month is incorrect. Check the expiration date or use a different card.",
  invalid_expiry_year:
    "The card’s expiration year is incorrect. Check the expiration date or use a different card.",
  invalid_number:
    "The card number is invalid. Check the card details or use a different card.",
  invalid_source_usage:
    "The source cannot be used because it is not in the correct state (e.g., a charge request is trying to use a source with a pending, failed, or consumed source). Check the status of the source you are attempting to use.",
  invoice_no_customer_line_items:
    "An invoice cannot be generated for the specified customer as there are no pending invoice items. Check that the correct customer is being specified or create any necessary invoice items first.",
  invoice_no_subscription_line_items:
    "An invoice cannot be generated for the specified subscription as there are no pending invoice items. Check that the correct subscription is being specified or create any necessary invoice items first.",
  invoice_not_editable:
    "The specified invoice can no longer be edited. Instead, consider creating additional invoice items that will be applied to the next invoice. You can either manually generate the next invoice or wait for it to be automatically generated at the end of the billing cycle.",
  invoice_upcoming_none:
    "There is no upcoming invoice on the specified customer to preview. Only customers with active subscriptions or pending invoice items have invoices that can be previewed.",
  livemode_mismatch:
    "Test and live mode API keys, requests, and objects are only available within the mode they are in.",
  missing:
    "Both a customer and source ID have been provided, but the source has not been saved to the customer. To create a charge for a customer with a specified source, you must first save the card details.",
  not_allowed_on_standard_account:
    "Transfers and payouts on behalf of a Standard connected account are not allowed.",
  order_creation_failed:
    "The order could not be created. Check the order details and then try again.",
  order_required_settings:
    "The order could not be processed as it is missing required information. Check the information provided and try again.",
  order_status_invalid:
    "The order cannot be updated because the status provided is either invalid or does not follow the order lifecycle (e.g., an order cannot transition from created to fulfilled without first transitioning to paid).",
  order_upstream_timeout: "The request timed out. Try again later.",
  out_of_inventory:
    "The SKU is out of stock. If more stock is available, update the SKU’s inventory quantity and try again.",
  parameter_invalid_empty:
    "One or more required values were not provided. Make sure requests include all required parameters.",
  parameter_invalid_integer:
    "One or more of the parameters requires an integer, but the values provided were a different type. Make sure that only supported values are provided for each attribute. Refer to our API documentation to look up the type of data each attribute supports.",
  parameter_invalid_string_blank:
    "One or more values provided only included whitespace. Check the values in your request and update any that contain only whitespace.",
  parameter_invalid_string_empty:
    "One or more required string values is empty. Make sure that string values contain at least one character.",
  parameter_missing:
    "One or more required values are missing. Check our API documentation to see which values are required to create or modify the specified resource.",
  parameter_unknown:
    "The request contains one or more unexpected parameters. Remove these and try again.",
  parameters_exclusive:
    "Two or more mutually exclusive parameters were provided. Check our API documentation or the returned error message to see which values are permitted when creating or modifying the specified resource.",
  payment_intent_authentication_failure:
    "The provided source has failed authentication. Provide source_data or a new source to attempt to fulfill this PaymentIntent again.",
  payment_intent_incompatible_payment_method:
    "The PaymentIntent expected a payment method with different properties than what was provided.",
  payment_intent_invalid_parameter:
    "One or more provided parameters was not allowed for the given operation on the PaymentIntent. Check our API reference or the returned error message to see which values were not correct for that PaymentIntent.",
  payment_intent_payment_attempt_failed:
    "The latest payment attempt for the PaymentIntent has failed. Check the last_payment_error property on the PaymentIntent for more details, and provide source_data or a new source to attempt to fulfill this PaymentIntent again.",
  payment_intent_unexpected_state:
    "The PaymentIntent’s state was incompatible with the operation you were trying to perform.",
  payment_method_unactivated:
    "The charge cannot be created as the payment method used has not been activated. Activate the payment method in the Dashboard, then try again.",
  payment_method_unexpected_state:
    "The provided payment method’s state was incompatible with the operation you were trying to perform. Confirm that the payment method is in an allowed state for the given operation before attempting to perform it.",
  payouts_not_allowed:
    "Payouts have been disabled on the connected account. Check the connected account’s status to see if any additional information needs to be provided, or if payouts have been disabled for another reason.",
  platform_api_key_expired:
    "The API key provided by your Connect platform has expired. This occurs if your platform has either generated a new key or the connected account has been disconnected from the platform. Obtain your current API keys from the Dashboard and update your integration, or reach out to the user and reconnect the account.",
  postal_code_invalid: "The postal code provided was incorrect.",
  processing_error:
    "An error occurred while processing the card. Check the card details are correct or use a different card.",
  product_inactive:
    "The product this SKU belongs to is no longer available for purchase.",
  rate_limit:
    "Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.",
  resource_already_exists:
    "A resource with a user-specified ID (e.g., plan or coupon) already exists. Use a different, unique value for id and try again.",
  resource_missing:
    "The ID provided is not valid. Either the resource does not exist, or an ID for a different resource has been provided.",
  routing_number_invalid: "The bank routing number provided is invalid.",
  secret_key_required:
    "The API key provided is a publishable key, but a secret key is required. Obtain your current API keys from the Dashboard and update your integration to use them.",
  sepa_unsupported_account: "Your account does not support SEPA payments.",
  shipping_calculation_failed:
    "Shipping calculation failed as the information provided was either incorrect or could not be verified.",
  sku_inactive:
    "The SKU is inactive and no longer available for purchase. Use a different SKU, or make the current SKU active again.",
  state_unsupported:
    "Occurs when providing the legal_entity information for a U.S. custom account, if the provided state is not supported. (This is mostly associated states and territories.)",
  tax_id_invalid:
    "The tax ID number provided is invalid (e.g., missing digits). Tax ID information varies from country to country, but must be at least nine digits.",
  taxes_calculation_failed: "Tax calculation for the order failed.",
  testmode_charges_only:
    "Your account has not been activated and can only make test charges. Activate your account in the Dashboard to begin processing live charges.",
  tls_version_unsupported:
    "Your integration is using an older version of TLS that is unsupported. You must be using TLS 1.2 or above.",
  token_already_used:
    "The token provided has already been used. You must create a new token before you can retry this request.",
  token_in_use:
    "The token provided is currently being used in another request. This occurs if your integration is making duplicate requests simultaneously.",
  transfers_not_allowed:
    "The requested transfer cannot be created. Contact us if you are receiving this error.",
  upstream_order_creation_failed:
    "The order could not be created. Check the order details and then try again.",
  url_invalid: "The URL provided is invalid.",
};
