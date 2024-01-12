from decimal import Decimal

from django.conf import settings
from django.db import models

from shop.models import Product


class Order(models.Model):
    email = models.EmailField(max_length=255)
    products = models.ManyToManyField(Product, related_name="orders")
    created_at = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self) -> str:
        return f"{self.email}, {self.created_at}"


class OrderItem(models.Model):
    product = models.ForeignKey(
        "shop.Product", on_delete=models.CASCADE, related_name="order_items"
    )
    quantity = models.PositiveIntegerField(default=1)
    order = models.ForeignKey(
        Order,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="order_items"
    )

    def calculate_total(self) -> Decimal:
        return self.product.price

    def __str__(self) -> str:
        return f"{self.product} X {self.quantity}"
