<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TopicNoRepliesController extends AbstractController
{
    #[Route('/topic/no/replies', name: 'app_topic_no_replies')]
    public function index(): Response
    {
        return $this->render('topic_no_replies/index.html.twig', [
            'controller_name' => 'TopicNoRepliesController',
        ]);
    }
}
