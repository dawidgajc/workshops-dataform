// Docs for the columns in the incremental tables:
const aggregated_columns = {
    billing_account_id: billing_account_id,
    customer_correlation_id: customer_correlation_id,
    sku_id: sku_id,
    sku_description: sku_description,
    global_cost: global_cost,
    invoice_month: invoice_month,
    usage_in_pricing_unit: usage_in_pricing_unit,
    pricing_unit: pricing_unit
}

// Docs for the columns in the monthly tables:
const country = "Owner of rebilling dataset";
const service_id = "The ID of the service that the usage is associated with.";
const service_description = "The Google service that reported the billing data";
const project_name = "The name of the Google Cloud project that generated the Cloud Billing data.";
const project_id = "The ID of the Google Cloud project that generated the Cloud Billing data.";


module.exports = {
    aggregated_columns,
    country,
    service_id
};