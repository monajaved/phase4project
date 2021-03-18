require "test_helper"

class ConstellationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @constellation = constellations(:one)
  end

  test "should get index" do
    get constellations_url, as: :json
    assert_response :success
  end

  test "should create constellation" do
    assert_difference('Constellation.count') do
      post constellations_url, params: { constellation: { name: @constellation.name } }, as: :json
    end

    assert_response 201
  end

  test "should show constellation" do
    get constellation_url(@constellation), as: :json
    assert_response :success
  end

  test "should update constellation" do
    patch constellation_url(@constellation), params: { constellation: { name: @constellation.name } }, as: :json
    assert_response 200
  end

  test "should destroy constellation" do
    assert_difference('Constellation.count', -1) do
      delete constellation_url(@constellation), as: :json
    end

    assert_response 204
  end
end
