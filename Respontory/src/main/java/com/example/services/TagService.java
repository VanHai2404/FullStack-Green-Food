package com.example.services;

import java.util.List;

import com.example.entities.Tag;

public interface TagService {
    Tag saveTag(Tag tag);
    Tag getTagById(Integer id);
    List<Tag> getAllTags();
    void deleteTag(Integer id);
}
