class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :address
      t.string :zip
      t.text :text
      t.boolean :security_professional, :default=> false
      t.timestamps
    end
  end
end
