package com.edu.shop.constants;

public enum ProductUnit {
	GOI("Gói"), KG("KG"), CAI("Cái");

	private String displayName;

	ProductUnit(String displayName) {
		this.displayName = displayName;
	}

	public String getDisplayName() {
		return displayName;
	}
}
