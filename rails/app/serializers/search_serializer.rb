class SearchSerializer < ActiveModel::Serializer
  attributes :Id, :Name, :trips, :id

  def id
  	@id = 1
  end
end
