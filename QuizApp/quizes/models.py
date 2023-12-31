from django.db import models

# Create your models here.

DIFF_CHOICES = (
    ('easy','easy'),
    ('medium','medium'),
    ('hard','hard'),
    ('extreme_hard','extreme_hard'),
)

class Quiz(models.Model):
    name = models.CharField(max_length=120)
    topic = models.CharField(max_length=100)
    number_of_questions = models.IntegerField()
    time = models.IntegerField(help_text="duration of the quiz in minutes")
    required_score_to_pass = models.IntegerField(help_text="minimum required score to pass in percent")
    difficulty = models.CharField(max_length=20, choices=DIFF_CHOICES)

    def __str__(self):
        return f"{self.name}-{self.topic}"
    
    def get_questions(self):
        return self.get_question_set.all()[:self.number_of_questions]
    
    class Meta:
        verbose_name_plural = 'Quizes'