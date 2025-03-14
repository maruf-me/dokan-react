export const AccessibleFeaturesForPartner = [
  {
    name: 'product_list',
    id: 'product_list',
    img: '/image/product_list.svg',
    active: true,
    permissions: [
      'product_add',
      'product_edit',
      'product_delete',
      'product_details',
      'view_product_list',
    ],
  },
  {
    name: 'stock_khata',
    id: 'stock_khata',
    img: '/image/product_list.svg',
    active: true,
    permissions: [
      'ready_sell',
      'product_purchase',
      'transactions_delete',
      'all_transactions_edit',
      'handover_product_to_dSR',
      'collect_payment_return_products',
      'view_low_stock_and_damage_stocks',
      'view_stock_history_transaction_details',
      'stock_transfer_all_transactions_of_damaged_stock',
    ],
  },
  {
    name: 'party_khata',
    id: 'party_khata',
    img: '/image/product_list.svg',
    active: true,
    permissions: [
      'party_edit',
      'add_new_party',
      'view_party_list',
      'transaction_edit',
      'transaction_delete',
      'view_party_details',
      'party_delete_restore',
      'do_all_transactions_of_party_khata',
    ],
  },
  {
    name: 'expense_book',
    id: 'expense_book',
    img: '/image/product_list.svg',
    active: true,
    permissions: [
      'expense_edit',
      'expense_delete',
      'edit_expense_category',
      'expense_category_delete_restore',
      'add_expense_view_expense_details',
      'add_expense_category_view_category_list',
    ],
  },
  {
    name: 'accounts',
    id: 'accounts',
    img: '/image/product_list.svg',
    active: false,
    permissions: ['user_will_get_all_access_of_account_feature'],
  },
  {
    name: 'business_reports',
    id: 'business_reports',
    img: '/image/product_list.svg',
    active: false,
    permissions: [
      'view_stock_report',
      'view_expnese_report',
      'view_supplier_report',
      'view_customer_report',
    ],
  },
];
