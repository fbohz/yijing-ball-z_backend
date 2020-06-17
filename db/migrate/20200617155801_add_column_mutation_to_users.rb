class AddColumnMutationToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :client_mutation_id, :string
  end
end
