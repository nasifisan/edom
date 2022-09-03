from rest_framework import serializers


class productSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    product_supplier = serializers.IntegerField()
    product_quantity = serializers.IntegerField()
    product_price = serializers.IntegerField()
    product_name = serializers.CharField()
