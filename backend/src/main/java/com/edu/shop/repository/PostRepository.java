package com.edu.shop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.shop.domain.Post;
import com.edu.shop.domain.PostComment;
import com.edu.shop.domain.PostTag;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    // Custom query to retrieve comments for a post
    List<PostComment> findCommentsByPostId(Integer postId);

    // Query derivation to find posts by a specific tag
     List<Post> findByPostTag(PostTag postTag);

//    // You can also use the derived query method to find posts by multiple tags
//    List<Post> findByTagsIn(List<Tag> tags);
}
