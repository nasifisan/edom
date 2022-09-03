from rest_framework import serializers

class userSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(read_only=True)
    user_image = serializers.CharField()
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    full_name = serializers.CharField()
    email = serializers.EmailField()
    address = serializers.CharField(max_length=255)
    phone = serializers.CharField(max_length=30)
    country = serializers.CharField(max_length=30)

class userAuthenticateSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(read_only=True)
    email = serializers.EmailField()
    password = serializers.CharField(max_length=39)


class userRegistrationSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    password = serializers.CharField(max_length=39)