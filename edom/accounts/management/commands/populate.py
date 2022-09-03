
from django.core.management import BaseCommand
from faker import Faker

from accounts.models import userProfile


class Command(BaseCommand):

    def handle(self, *args, **options):
        faker = Faker()

        for _ in range(50):
            userProfile.objects.create(
                user_id = _ + 2,
                first_name = faker.name(),
                last_name = faker.name(),
                user_image = faker.image_url(),
                email = faker.email(),
                address = faker.address(),
                country = faker.country(),
                phone = faker.phone_number()
            )