RSpec.configure do |config|
  config.before(:suite) do
    DatabaseCleaner.strategy = :deletion, {except: %w[spatial_ref_sys]}
    DatabaseCleaner.clean_with :truncation, except: %w[spatial_ref_sys]
  end

  config.before do
    DatabaseCleaner.strategy = :transaction
  end

  config.before do
    DatabaseCleaner.start
  end

  config.after do
    DatabaseCleaner.clean
  end
end
